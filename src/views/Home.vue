<template>
  <div class="home">
    <h5>Home</h5>
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
