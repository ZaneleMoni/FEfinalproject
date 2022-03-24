<template>
  <h1>{{ blog.title }}</h1>
  <p>{{blog.content}}</p>
  <img :src="blog.img" alt="">
</template>
<script>
export default {
  data() {
    return {
      blog: {},
    };
  },
  mounted() {
    fetch("https://my-blogyy.herokuapp.com/blogs/" + this.$route.params.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      
    })
      .then((response) => response.json())
      .then((data) => {
        this.blog = data;
        console.log(this.blog);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
};
</script>

<style scoped>

</style>
