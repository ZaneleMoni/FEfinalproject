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
