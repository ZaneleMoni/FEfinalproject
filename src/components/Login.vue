<template>
  <section id="container1">
    <div class="container11" id="login">
      <div class="row d-flex align-items-center justify-content-center">
        <div class="col-md-6">
          <div class="card1 px-5 py-5">
            <form class="formP" @submit.prevent="login">
            <h3 class="mt-3">Login <br /></h3>

            <div class="form-input">
              <i class="fa fa-envelope"></i>
              <input
              required
                type="text"
                class="form-control"
                v-model="name"
                placeholder="Username"
              />
            </div>

            <div class="form-input">
              <i class="fa fa-lock"></i>
              <input 
              required
              type="password"
               class="form-control" 
               v-model="password"
               placeholder="password" />
            </div>
            <button class="btn btn-primary mt-4" type="submit">Sign in!</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
data(){
    return {
        name: "",
        password: ""
    };
},
  
methods: {
    login(){
            console.log(this.name, this.password);
      fetch("https://my-blogyy.herokuapp.com/users", {
      method:"PATCH",
      body:JSON.stringify({
          name:this.name,
          password:this.password,
        }),
      
      headers:{
          "Content-type":"application/json;charset=UTF-8",
      },
      
        })
        .then((res) => res.json())
        .then((json) => {
          if(json.jwt){
            localStorage.setItem("jwt", json.jwt);
          }
          if (localStorage.getItem("jwt")){
          localStorage.setItem("name", json.name);
          localStorage.setItem("email", json.email);
          localStorage.setItem("phone_number", json.phone_number);
           this.$router.push({name:"Blogs"});
          }
          else{
            alert("The username or password you entered is invalid")
          }
           
        })
        .catch((err) =>{
            alert(err);
        });
    },
},
};
</script>

<style Scoped>

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
.lorem{
  font-size: 50px;
}
 @media (max-width: 600px) { 
  .lorem{
   font-size: 30px;
  }
 }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.flex-div {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.name-content {
  margin-right: 7rem;
}

.name-content .logo {
  font-size: 3.5rem;
  color: #1877f2;
}

.name-content p {
  font-size: 1.3rem;
  font-weight: 500;
  margin-bottom: 5rem;
}

/* .formP {
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 2rem;
  width: 530px;
  height: 380px;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
} */
.formP {
  
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
}

form input {
  outline: none;
  padding: 0.8rem 1rem;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

form input:focus {
  border: 1.8px solid #1877f2;
}

form .login {
  outline: none;
  border: none;
  background: #1877f2;
  padding: 0.8rem 1rem;
  border-radius: 0.4rem;
  font-size: 1.1rem;
  color: #fff;
}

form .login:hover {
  background: #0f71f1;
  cursor: pointer;
}

form a {
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  padding-top: 0.8rem;
  color: #1877f2;
}

form hr {
  background: #f7f7f7;
  margin: 1rem;
}

form .create-account {
  outline: none;
  border: none;
  background: #06b909;
  padding: 0.8rem 1rem;
  border-radius: 0.4rem;
  font-size: 1.1rem;
  color: #fff;
  width: 75%;
  margin: 0 auto;
}

form .create-account:hover {
  background: #03ad06;
  cursor: pointer;
}

/* //.........Media Query.........// */

@media (max-width: 500px) {
  html {
    font-size: 60%;
  }

  .name-content {
    margin: 0;
    text-align: center;
  }

  form {
    width: 300px;
    height: fit-content;
  }

  form input {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  form .login {
    font-size: 1.5rem;
  }

  form a {
    font-size: 1.5rem;
  }

  form .create-account {
    font-size: 1.5rem;
  }

  .flex-div {
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 501px) and (max-width: 768px) {
  html {
    font-size: 60%;
  }

  .name-content {
    margin: 0;
    text-align: center;
  }

  form {
    width: 300px;
    height: fit-content;
  }

  form input {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  form .login {
    font-size: 1.5rem;
  }

  form a {
    font-size: 1.5rem;
  }

  form .create-account {
    font-size: 1.5rem;
  }

  .flex-div {
    display: flex;
    flex-direction: column;
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  html {
    font-size: 60%;
  }

  .name-content {
    margin: 0;
    text-align: center;
  }

  form {
    width: 300px;
    height: fit-content;
  }

  form input {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  form .login {
    font-size: 1.5rem;
  }

  form a {
    font-size: 1.5rem;
  }

  form .create-account {
    font-size: 1.5rem;
  }

  .flex-div {
    display: flex;
    flex-direction: column;
  }

  @media (orientation: landscape) and (max-height: 500px) {
    .header {
      height: 90vmax;
    }
  }  
}
@media (min-width: 42/8px) {
  .form-control {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  .form-control {
    padding: 50px 70px;
  }
}
.error {
  color: red;
}
</style>