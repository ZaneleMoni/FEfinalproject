<template>
<div class="container read2">
 <div id="read" >
 <img :src="blog.img" alt="">
  <h1>{{ blog.title }}</h1>
  <p>{{blog.content}}</p>
 </div> 
</div>

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
#read{
  margin: 0;
 
  justify-content: right;
}
.read2{
 text-align: center;
width: 100%;
}
</style>
