<template>
<div id="nav">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li>
          <router-link to="/">Home</router-link> |
        </li>
        <li>
          <router-link to="/about">About</router-link> |
        </li>
        <li>
          <router-link to="/blogs">Blogs</router-link> |
        </li>
        <li>
          <router-link to="/more"></router-link> 
        </li>
        <li>
           <router-link to="/login">Login</router-link> |
        </li>
        <li>
          <router-link to="/register">Register</router-link> |
        </li>
         <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul> 
    </div>
  </div>
</nav>
</div>

  <router-view/>
</template>


<script>



export default {
  
}
</script>

<style Scoped>
.li{
 display: flex;
 flex-wrap: wrap;
}
body {
  font-family: "PT Sans Caption", "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif;
  font-size: 3vh;
}

#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#logo {
  text-decoration: none;
  color: white;
  font-size: 5vh;
  font-weight: bold;
}

#menu-icon {
  font-family: Geneva, sans-serif;
  font-size: 6vh;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 1em;
  box-sizing: border-box;
  color: white;
  /* background: url(https://images.unsplash.com/photo-1545239351-ef35f43d514b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80) center center no-repeat; */
  background-size: cover;
}

.hero-title {
  max-width: 16em;
  margin: 0;
  font-size: 2vh;
  font-weight: bold;
  line-height: 0.9;
  color: rgb(75, 22, 57);
}

@media only screen and (min-width: 32em) {
  .hero-title {
    font-size: 16vh;
  }
}
.hero-footer {
  display: flex;
  margin-bottom: 1em;
}

.button {
  padding: 0.5em 0.67em;
  color: white;
  text-decoration: none;
  border: 0.1em solid white;
}

.button-primary {
  color: black;
  background-color: white;
}

article {
  max-width: 36em;
  margin: 0 auto;
  padding: 1em;
}

</style>
