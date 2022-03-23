<template>
  <h1>{{ blog._id }}</h1>
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
<style scoped></style>
