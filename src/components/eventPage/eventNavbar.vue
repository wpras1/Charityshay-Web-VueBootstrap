<template>
  <nav class="navbar navbar-expand-lg bg-transparent">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img
          src="@/assets/homeAssets/navbar/Logo.svg"
          alt="Logo"
          width="120"
          height="65"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto p-2 me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/causes">Causes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/blog">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/event"
              >Event</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact Us</a>
          </li>
        </ul>
        <div class="d-flex">
          <button class="btn-support">Give Suport ></button>
        </div>
      </div>
    </div>
  </nav>
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

nav {
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  background-color: white;
  padding: 15 20px;
}

a {
  color: #4e48e2;
}

.nav-item {
  padding: 0 20px;
}
.btn-support {
  background-color: #4e48e2;
  color: white;
  border-style: solid;
  border-color: #4e48e2;
  border-radius: 5px;
  padding: 10px 20px 10px 20px;
  transition: 0.3s;
}
.btn-support:hover {
  background-color: white;
  color: #4e48e2;
  border-style: solid;
  border-color: #4e48e2;
  border-radius: 5px;
  padding: 10px 20px 10px 20px;
}
</style>
