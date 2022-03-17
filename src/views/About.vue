<template>
 
    <!-- ======= About Section ======= -->
    <section id="about" class="about p-5">
      <div class="container">

        <div class="row no-gutters">
          <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div class="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div class="content d-flex flex-column justify-content-center">
              <h3>Voluptatem dignissimos provident quasi</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
              <div class="row">
                <div class="col-md-6 icon-box">
                  <i class="bx bx-receipt"></i>
                  <h4>Corporis voluptates sit</h4>
                  <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                </div>
                <div class="col-md-6 icon-box">
                  <i class="bx bx-cube-alt"></i>
                  <h4>Ullamco laboris nisi</h4>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                </div>
                <div class="col-md-6 icon-box">
                  <i class="bx bx-images"></i>
                  <h4>Labore consequatur</h4>
                  <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                </div>
                <div class="col-md-6 icon-box">
                  <i class="bx bx-shield"></i>
                  <h4>Beatae veritatis</h4>
                  <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                </div>
              </div>
            </div><!-- End .content-->
          </div>
        </div>

      </div>
    </section><!-- End About Section -->
</template>

<script>
export default {};
</script>

<style Scoped>
.about .content {
  padding: 30px 0;
}
.about .content h3 {
  font-weight: 700;
  font-size: 34px;
}
.about .content p {
  margin-bottom: 0;
}
.about .content .icon-box {
  margin-top: 25px;
}
.about .content .icon-box h4 {
  font-size: 20px;
  font-weight: 700;
  margin: 5px 0 10px 60px;
}
.about .content .icon-box i {
  font-size: 48px;
  float: left;
  color: #5c9f24;
}
.about .content .icon-box p {
  font-size: 15px;
  color: #848484;
  margin-left: 60px;
}
.about .image {
  /* background: url("https://i.picsum.photos/id/244/367/267.jpg?hmac=KjgMJx6F0HZVdOgZrxswmlXWZoaStH88a0Gw8HGXezI") center center no-repeat; */
  background-size: cover;
  min-height: 400px;
}
@media (max-width: 991px) {
  .about .image {
    text-align: center;
  }
  .about .image img {
    max-width: 80%;
  }
}
@media (max-width: 667px) {
  .about .image img {
    max-width: 100%;
  }
}
</style>
