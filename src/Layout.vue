<template>
  <div id="proj">
    <div id="nav">
      <div class="container">
        <div class="row">
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
