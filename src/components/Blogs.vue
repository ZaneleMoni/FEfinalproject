<template>
  <div id="blogs p-5">
    <div class="container">
      <div class="row  text-center row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div class="d-flex container p-5" v-for="blog of blogs" :key="blog._id">
          <div class="blog-card">
            <div class="blog-tumb">
              <img :src="blog.img" alt="" />
            </div>
            <div class="blog-details">
              <h4>{{ blog.title }}</h4>
              <p>{{ blog.content.substring(0, 50) }}...</p>
              <div class="blog-bottom-details col">
                <p class="read-more">
                  <router-link
                    :to="{ name: 'SingleBlog', params: { id: blog._id } }"
                    >Read More</router-link
                  >
                </p>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-edit="modal"
                  data-bs-toggle="modal"
                  data-bs-target="#editBlogModal"
                >
                  edit
                </button>
                <Edit v-bind:blog="blog" />
                <button
                  type="button"
                  class="btn btn-danger"
                  v-on:click="removeBlog(blog._id)"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-4"></div>
        <div class="col-6 col-md-4"></div>
      </div>
    </div>
  </div>
  <button
  id="add"
    type="button"
    class="btn mt-4 button-body"
    data-bs-toggle="modal"
    data-bs-target="#addBlogModal"
  >
    Add Blog
  </button>

  <!-- Modal 1-->
  <div
    class="modal fade p-5"
    id="addBlogModal"
    tabindex="1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="newBlog">
            <div class="mb-3">
              <label for="addTitle" class="form-label">Title</label>
              <input
                class="form-control"
                type="text"
                name="title"
                id="addTitle"
                v-model="title"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Content</label>
              <input
                class="form-control"
                name="content"
                id="content"
                v-model="content"
              />
            </div>

            <div class="mb-6">
              <label for="addImg" class="form-label">Image</label>
              <input
                class="form-control"
                type="text"
                name="img"
                id="addImg"
                v-model="img"
              />
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
            type="button p-5"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            v-on:click="createBlog()"
          >
            Add Blog
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Edit from "../components/Edit.vue";

export default {
  components: { Edit },
  data() {
    return {
      blogs: [],
      title: "",
      content: "",
      img: "",
    };
  },
  methods: {
    removeBlog(id) {
      console.log(id);
      fetch("https://my-blogyy.herokuapp.com/blogs/" + id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("Blog removed successfully");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    saveBlog(id) {
      console.log(this.title, this.content, this.img);
      fetch("https://my-blogyy.herokuapp.com/blogs/" + id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          content: this.content,
          img: this.img,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },

    createBlog() {
      console.log(this.title, this.content, this.img);
      fetch("https://my-blogyy.herokuapp.com/blogs", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          content: this.content,
          img: this.img,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  mounted() {
    if (localStorage.getItem("jwt")) {
    fetch("https://my-blogyy.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.blogs = data;
      })
      .catch((err) => console.log(err.message));
  }
  },
};
</script>

<style Scoped>
img {
  height: 250px;
  width: 220px;
}
#add{
  background-color: #e2b623;
  margin-bottom: 71px;
  margin-left: 30px;
}
p {
  color: black;
}
.container{
  align-items: center;
}
</style>
