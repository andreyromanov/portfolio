<template>
  <div id="app">
    <div id="nav">
      <div class="container">
        <div class="row">
          <div class="col-md-3 border py-2">
            <img src="/author.jpg" class="rounded mx-auto d-block img-user" alt="Me">
            <ul class="list-group mt-3">
              <li class="list-group-item">
                <i class="far fa-user"></i>
                <span class="user-info">Andrii Romanov</span>
              </li>
              <li class="list-group-item">
                <i class="fas fa-globe"></i>
                <span class="user-info">Full-stack web developer</span>
              </li>
              <li class="list-group-item">
                <i class="fab fa-linkedin"></i>
                <span class="user-info">LinkedIn</span>
              </li>
              <li class="list-group-item">
                <i class="far fa-map"></i>
                <span class="user-info">Odesa, Ukraine</span>
              </li>
            </ul>
          </div>
          <div class="col-md-9 border">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About Me</router-link>
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
