<template>
  <div class="container">
        <div class="navbar-menu">
            <div class="navbar-start">
                <!-- navbar items --> 
            </div>
            <div class="navbar-end">
                <!-- navbar items -->
                <a class="navbar-item mininav" href="help.html">
                    help
                </a>
                <a class="navbar-item mininav" href="Seller/index.html">
                    Buyer
                </a>
                <a class="navbar-item mininav" href="Admin/index.html">
                    Admin
                </a>
                <a class="navbar-item mininav" href="signin.html">
                    Sign in
                </a>
                <a class="navbar-item mininav" href="register.html">
                    Register
                </a>
            </div>
        </div>
        <br>
        <h1 class="title">Sign in</h1>
        <p class="aligncenter">Sign in to  or&nbsp;<a href="">create an account</a></p>
        <br>

        <div class="columns aligncenter">
            <div class="column is-4">
                <input class="input is-primary" type="text" placeholder="Username" v-model="username">
            </div>
        </div>

        <div class="columns aligncenter">
            <div class="column is-4">
                <input class="input is-primary" type="text" placeholder="Password" v-model="password">
            </div>
        </div>


        <center><button class="button is-primary">Login</button></center>

    </div>
</template>

<script>
export default {
    data() {
      return {
          username:'',
          password:''
      }
    }
  }
</script>

<style scoped>
</style>