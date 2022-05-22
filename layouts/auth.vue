<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-7 d-xl-block d-none vh-100 ps-0">
        <div class="banner bg-jungle-green p-0 d-flex justify-content-center align-items-start">
<!--         <div class="h-25 text-center pt-xl-8">-->
<!--           <h1 class="text-white heading">Enabling equitable <br>-->
<!--             access to finance.</h1>-->
<!--         </div>-->
        </div>
      </div>
      <div class="col-xl-5 col-md-5 col-sm-7 offset-sm-3 offset-xl-0 offset-md-4">
        <NuxtChild />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['registration']
}
</script>
<style lang="scss" scoped>
.eden-shadow {
  box-shadow: 0px 6px 8px 6px rgba(146, 204, 191, 0.24);
}
.heading {
  font-size: 50px;
}
* {
  //border: 1px solid red;
}
.banner {
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('./assets/banner.png');
  background-position: center center;
}

</style>
