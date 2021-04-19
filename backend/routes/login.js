const express = require("express");
const path = require("path");
const pool = require("../config");
const fs = require("fs");

router = express.Router();

router.get("/login", async function(req, res, next){
  const conn = await pool.getConnection();
  await conn.beginTransaction();
  try {
    await conn.query("INSERT INTO user(f_name, l_name, username, password, email, phone_number, usertype) VALUES(?, ?, ?, ?, ?, ?, ?);", 
    [f_name, l_name, username, password, email, phone_number, usertype])  
    await conn.commit()
    res.send("success!");
    
  } catch (err) {
    await conn.rollback();
    return res.status(400).json(err);
  } finally {
    console.log("finally");
    conn.release();
  }

})


exports.router = router;