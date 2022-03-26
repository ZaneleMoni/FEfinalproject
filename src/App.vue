<template>
<!-- Header-->
    <header class="header">
      <!-- Top bar -->
      <div class="py-2 bg-dark text-white">
        <div class="container py-1">
          <div class="row align-items-center">
            <div class="col-lg-4">
              <ul class="list-inline mb-0 text-sm">
                <li class="list-inline-item"><router-link  active to="/">Home</router-link></li>
                <li class="list-inline-item"> <router-link to="/about">About</router-link></li>
                <li class="list-inline-item"> <router-link to="/login">Login</router-link></li>
                <li class="list-inline-item"> <router-link to="/register">Register</router-link></li>
                <li class="list-inline-item"> <router-link to="/profile">Profile</router-link></li>
                <li class="list-inline-item"> <router-link to="/contact">Contact</router-link></li>
                <li class="list-inline-item"> <router-link to="/blogs">Blogs</router-link></li> 
                       
                  </ul>
            </div>
          </div>
        </div>
      </div>
      
    </header>

  <router-view/>
      <footer class="bg-dark py-1 fixed-bottom p-5">
      <div class="container">
        <div class="row py-2 gy-2">
          <div class="col-lg-4 text-center text-lg-start">
            <p class="small text-muted text-uppercase mb-0">&copy; copyright 2022 - all rights reserved</p>
          </div>
          <div class="col-lg-4 text-center">
            <ul class="list-inline text-white small mb-0">
              <li class="list-inline-item"><a class="reset-anchor" href="https://codepen.io/ZaneleMoni"><i class="fab fa-codepen"></i></a></li>
              <li class="list-inline-item"><a class="reset-anchor" href="https://twitter.com/NtombizaneleMo2"><i class="fab fa-twitter"></i></a></li>
              <li class="list-inline-item"><a class="reset-anchor" href="https://www.instagram.com/moni_zanele/"><i class="fab fa-instagram"></i></a></li>
              <li class="list-inline-item"><a class="reset-anchor" href="https://www.linkedin.com/in/zanele-moni-b88559184/"><i class="fab fa-linkedin"></i></a></li>
              <li class="list-inline-item"><a class="reset-anchor" href="https://github.com/ZaneleMoni"><i class="fab fa-github"></i></a></li>
            </ul>
          </div>
          <div class="col-lg-4 text-center text-lg-end">
            <p class="small text-muted text-uppercase mb-0">Ntombizanele Moni </p>
          </div>
        </div>
      </div>
    </footer>
</template>


<script>



export default {
  
}
</script>

<style>



</style>
