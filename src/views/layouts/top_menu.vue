<template>
  <div id="proj">
    <div id="nav" class="border-bottom">
      <div class="container">
        <div class="row">
          <div id="main-container" class="col-md-12 text-right">
            <router-link class="float-left" to="/projects"> Back to portfolio</router-link>
            <router-link to="/uatao">UA-TAO</router-link> |
            <router-link to="/wrapcrowd">WRAPCROWD</router-link> |
            <router-link to="/mebtex">Mebtex</router-link> |
            <router-link to="/skytex">Skytex</router-link>
          </div>
        </div>
      </div>
    </div>

    <router-view />

  </div>
</template>
