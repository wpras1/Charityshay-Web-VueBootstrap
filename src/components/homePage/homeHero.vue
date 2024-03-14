<template>
  <div class="container d-flex mt-5">
    <div class="hero">
      <h1 class="hero-title">
        We Need Your Powerful Hands To
        <span style="color: #4e48e2">Change</span> The World.
      </h1>
      <div class="hero-btn mt-5">
        <button class="btn-causes">All Causes ></button>
        <button class="btn-donate">Donate Now ></button>
      </div>
    </div>
    <div class="hero-img">
      <img src="@/assets/homeAssets/hero/Hero Images.svg" />
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

root {
  --primary-color: #4e48e2;
  --secondary-color: #213ad1;
  --primary-bg: white;
  --primary-text: #2a2a2a;
  --secondary-text: #414141;
}

.container {
  align-items: center;
}

.hero-title {
  font-family: "Playfair Display", serif;
  font-size: 450%;
  font-weight: 800;
}

.hero-btn {
  font-family: "Montserrat", sans-serif;
}

.btn-causes {
  background-color: #4e48e2;
  border-color: #4e48e2;
  color: white;
  border-style: solid;
  border-radius: 15px;
  padding: 20px 40px 20px 40px;
  transition: 0.3s;
}

.btn-causes:hover {
  background-color: white;
  color: #4e48e2;
  border-style: solid;
  border-color: #4e48e2;
}

.btn-donate {
  background-color: white;
  color: #4e48e2;
  border-color: #4e48e2;
  text-decoration: none;
  font-weight: 500;
  border-radius: 15px;
  padding: 20px 40px 20px 40px;
  transition: 0.3s;
  margin-left: 50px;
}

.btn-donate:hover {
  background-color: #4e48e2;
  color: white;
  border-radius: 15px;
  border-style: solid;
  padding: 20px 40px 20px 40px;
}
</style>
