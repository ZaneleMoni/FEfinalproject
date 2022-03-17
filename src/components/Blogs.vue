<template>
  <div id="blogs">
    <div class="d-flex container" v-for="blog of blogs" :key="blog._id">
      <div class="blog-card">
        <div class="blog-tumb">
          <img :src="blog.img" alt="" />
        </div>
        <div class="blog-details">
          <h4>{{ blog.title }}</h4>
          <p>{{ blog.content }}</p>
          <div class="blog-bottom-details">
            <p class="read-more">
              <a href="#">Read More</a>
            </p>
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
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button class="modal-title" id="exampleModalLabel">
                        Add a Blog
                      </button>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
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
                          class="form-select"
                          name="addCategory"
                          id="addCategory"
                          v-model="content"
                        >
                      </div>
                     
                      <div class="mb-3">
                        <label for="addImg" class="form-label">Image</label>
                        <input
                          class="form-control"
                          type="text"
                          name="img"
                          id="addImg"
                          v-model="img"
                        />
                      </div>
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
                        Create Blog
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
    };
  },

  mounted() {
    fetch("https://my-blogyy.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => (this.blogs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style Scoped>
img {
  height: 250px;
  widows: 250px;
}

p {
  color: black;
}
</style>
