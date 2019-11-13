<template>
  <div class="home">
    <h1>This is Home page with details</h1>
    <HelloWorld msg="Welcome to my Portfolio" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
