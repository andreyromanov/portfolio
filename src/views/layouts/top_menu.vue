<template>
  <div id="proj">

<nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="float-left" to="/projects">
    <i class="fas fa-chevron-left"></i>
    <i class="fas fa-chevron-left"></i>
    &nbsp;&nbsp;<span v-text="$ml.get('back')"/></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse text-center" id="navbarTogglerDemo02">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
      <label class="prj-menu"><router-link to="/chineselogic" class="ml-3">ChineseLogic</router-link></label>
      <label class="prj-menu"><router-link to="/uatao" class="ml-3">UA-TAO</router-link></label>
      <label class="prj-menu"><router-link to="/u-build" class="ml-3">U-Build</router-link></label>
      <label class="prj-menu"><router-link to="/app-starter" class="ml-3">AppStarter</router-link></label>
      <label class="prj-menu"><router-link to="/wrapcrowd" class="ml-3">WRAPCROWD</router-link></label>
      <label class="prj-menu"><router-link to="/mebtex" class="ml-3">Mebtex</router-link></label>
      <label class="prj-menu"><router-link to="/skytex" class="ml-3">Skytex</router-link></label>
  </div>
</nav>

    <router-view />

  </div>
</template>
