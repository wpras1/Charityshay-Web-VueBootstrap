import backgroundHome from './components/homePage/backgroundHome.vue';
<template>
  <body>
    <div>
      <homeNavbar></homeNavbar>
      <homeHero></homeHero>
    </div>
  </body>
</template>

<style scoped>
body {
  background-image: url("@/assets/homeAssets/hero/Ellipse.svg");
  background-size: 27%;
  background-position: 0% -70%;
  background-repeat: no-repeat;
}
</style>
