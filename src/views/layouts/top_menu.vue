<template>
  <div id="proj">

<nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="float-left" to="/projects">
    <i class="fas fa-chevron-left"></i>
    <i class="fas fa-chevron-left"></i>
    &nbsp;&nbsp;Back to all info</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse text-center" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
    <router-link to="/uatao">UA-TAO</router-link>
    <router-link to="/wrapcrowd" class="ml-3">WRAPCROWD</router-link>
    <router-link to="/mebtex" class="ml-3">Mebtex</router-link>
    <router-link to="/skytex" class="ml-3">Skytex</router-link>
  </div>
</nav>

    <router-view />

  </div>
</template>
