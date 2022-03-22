<template>
  <div id="blogs">
    <div class="d-flex container row" v-for="blog of blogs" :key="blog._id">
      <div class="blog-card col">
        <div class="blog-tumb col">
          <img :src="blog.img" alt="" />
        </div>
        <div class="blog-details col">
          <h4>{{ blog.title }}</h4>
          <p>{{ blog.content }}</p>
          <div class="blog-bottom-details col">
            <p class="read-more">
              <a href="/paris">Read More</a>
            </p>
            <button
              type="edit"
              class="btn btn-secondary"
              data-bs-edit="blog"
              @onclick="editBlog()"
            >
              edit
            </button>
            <button
              type="remove"
              class="btn btn-danger"
              data-bs-delete="removeblog"
              @onclick="removeBlog()"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button
    type="button"
    class="btn mt-4 button-body"
    data-bs-toggle="modal"
    data-bs-target="#addBlogModal"
  >
    <p class="sub">Add a Blog</p>
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
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
                name="addCategory"
                id="addCategory"
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
            type="button"
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
export default {
  data() {
    return {
      blogs: [],
      title: "",
      content: "",
      img: "",
    };
  },
  methods: {
    // removeBlog(){
    //   fetch("https://my-blogyy.herokuapp.com/blogs",{
    //   method:"DELETE",
    //   headers:{
    //      "Content-Type": "application/json",
    //   },
    //    body: JSON.stringify({
    //       title: this.title,
    //       content: this.content,
    //       img: this.img,
    //     }),
    //   })
    //      .then((response) => response.json())
    //     .then((data) => {
    //       console.log("Success:", data);
    //     })
    //     .catch((error) => {
    //       console.error("Error:", error);
    //     });
    // },
  
    
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
    fetch("https://my-blogyy.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.blogs = data;
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style Scoped>
img {
  height: 250px;
  width: 220px;
}

p {
  color: black;
}
</style>
