<template>
  <!-- ======= Contact Section ======= -->
  <section id="contact" class="contact p-5">
    <div class="container">
      <div class="section-title">
        <h2>Contact</h2>
        <p></p>
      </div>
      <div class="row contact-info">
        <div class="col-md-4">
          <div class="contact-address">
            <i class="bi bi-geo-alt"></i>
            <h3>Address</h3>
            <address>South Africa, Cape Town</address>
          </div>
        </div>

        <div class="col-md-4">
          <div class="contact-phone">
            <i class="bi bi-phone"></i>
            <h3>Phone Number</h3>
            <p><a href="tel:+27624334358">+27 62 455 4898</a></p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="contact-email">
            <i class="bi bi-envelope"></i>
            <h3>Email</h3>
            <p><a href="mailto:zanelemoni4@gmail.com">zanelemoni4@gmail.com</a></p>
          </div>
        </div>
      </div>

      <div class="form">
        <form
          @submit.prevent="handleSubmit"
          action="forms/contact.php"
          method="post"
          role="form"
          class="php-email-form"
        >
          <div class="row">
            <div class="col-md-6 form-group">
              <input
                v-model="name"
                type="text"
                name="name"
                class="form-control"
                id="name"
                placeholder="Your Name"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
              <input
                v-model="email"
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
              />
            </div>
          </div>
          <div class="form-group mt-3">
            <input
              v-model="subject"
              type="text"
              class="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div class="form-group mt-3">
            <textarea
              v-model="message"
              class="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div class="my-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div class="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.email, this.name, this.message, this.subject);
      let contacts = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      };
      fetch("https://my-blogyy.herokuapp.com/contacts", {
        method: "POST",
        body: JSON.stringify(contacts),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => alert(json.msg))
        .catch((e) => alert(e.msg));
    },
  },
};
</script>

<style Scoped>
.form {
  margin-bottom: 5rem;
}
#contact {
  margin-right: 20%;
  margin-left: 20%;
}
h2 {
  text-align: center;
  color: #5c9f24;
}
p {
  color: rgb(31, 30, 30);
}
.contact .contact-info {
  margin-bottom: 20px;
  text-align: center;
}
.contact .contact-info i {
  font-size: 48px;
  display: inline-block;
  margin-bottom: 10px;
  color: #5c9f24;
}
.contact .contact-info address,
.contact .contact-info p {
  margin-bottom: 0;
  color: #5c9f24;
}
.contact .contact-info h3 {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: #999;
}
.contact .contact-info a {
  color: #5c9f24;
}
.contact .contact-info a:hover {
  color: #5c9f24;
}
.contact .contact-address,
.contact .contact-phone,
.contact .contact-email {
  margin-bottom: 20px;
}
.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .error-message br + br {
  margin-top: 25px;
}
.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}
.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}
.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  height: auto;
  padding: 10px 15px;
  border-radius: 4px;
}
.contact .php-email-form input:focus,
.contact .php-email-form textarea:focus {
  border-color: #5c9f24;
}
.contact .php-email-form button[type="submit"] {
  background: #5c9f24;
  border: 0;
  padding: 10px 30px 12px 30px;
  color: #fff;
  transition: 0.4s;
  border-radius: 4px;
}
.contact .php-email-form button[type="submit"]:hover {
  background: #6ab82a;
}
@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (min-width: 768px) {
  .contact .contact-phone {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
  }
  .contact .contact-address,
  .contact .contact-phone,
  .contact .contact-email {
    padding: 20px 0;
  }
}
</style>
