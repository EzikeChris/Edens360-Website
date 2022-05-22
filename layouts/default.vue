<template>
  <div class="pt-3">
    <NuxtChild />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Source+Sans+Pro:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

@font-face {
  font-family: 'Gilroy';
  font-weight: 700;
  src: url("../assets/fonts/gilroy-font/Gilroy-Bold.otf") format("opentype")
}
@font-face {
  font-family: 'Gilroy';
  font-weight: 800;
  src: url("../assets/fonts/gilroy-font/Gilroy-Extrabold.otf") format("opentype")
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html,
body,
#root,
#__layout {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-family: 'DM Sans', 'Source Sans Pro', sans-serif;
  overflow-y: auto;
  -webkit-font-smoothing: antialiased;
}

p {
  padding: 0;
  margin: 0;
}

a,
a:hover {
  text-decoration: none !important;
  text-decoration-color: white;
  -moz-text-decoration-color: white;
}
</style>
