<template>
  <div id="background"></div>
  <RouterLink to="/"></RouterLink>
  <RouterLink to="/about"></RouterLink>
  <RouterLink to="/causes"></RouterLink>
  <RouterLink to="/blog"></RouterLink>
  <RouterLink to="/event"></RouterLink>
  <RouterLink to="/contact"></RouterLink>

  <RouterView />
</template>

<style scoped>
#background {
  background-image: url("@/assets/homeAssets/hero/Ellipse.svg");
  background-size: 27%;
  background-position: 0% -70%;
  background-repeat: no-repeat;
}
</style>
