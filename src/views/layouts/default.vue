<template>
  <div id="app">
    <div id="nav">
      <div class="container">
        <div class="row">
          <div id="nav-div" class="col-md-3 py-2">
            <img
              src="/author.jpg"
              class="rounded mx-auto d-block img-user"
              alt="Me"
            />
            <ul id="info-list" class="list-group mt-3 text-left">
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
          <div id="main-container" class="col-md-9 border py-2">
            <router-link to="/">About</router-link> |
            <router-link to="/skills">Skills</router-link> |
            <router-link to="/projects">Projects</router-link>

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
  padding: 20px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
