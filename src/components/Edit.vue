<template>
  <!-- edit blog -->
  <div
    class="modal fade"
    id="editBlogModal"
    tabindex="1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editBlog">
            <p>Update your blog here.</p>

            <div class="form-input">
              <i class="fa fa-lock"></i>
              <input
                type="text"
                class="form-control"
                v-model="title"
                placeholder="title of blog"
                required
              />
            </div>
            <div class="form-input">
              <i class="fa fa-lock"></i>
              <input
                type="text"
                class="form-control"
                v-model="content"
                placeholder="content of blog"
                required
              />
              <div class="form-input">
                <i class="fa fa-lock"></i>
                <input
                  type="text"
                  class="form-control"
                  v-model="img"
                  placeholder="image link of blog"
                  required
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            v-on:click="editBlog(id)"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      title: "",
      img: "",
      content: "",
    };
  },
  props: ["blog"],
  mounted() {
    console.log(this.blog);
    this.id = this.blog._id;
    this.title = this.blog.title;
    this.content = this.blog.content;
    this.img = this.blog.img;
    
    // console.log("This is the blog I want to edit: ", this.blog);
  },
  methods: {
    editBlog(id) {
      console.log(id);
      fetch("https://my-blogyy.herokuapp.com/blogs/" + id, {
        method: "PATCH",
        body: JSON.stringify({
          title: this.title,
          content: this.content,
          img: this.img,
          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("Blog updated successfully");
          //   localStorage.getItem("jwt", data.jwt);
          //   this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script>

<style>

</style>