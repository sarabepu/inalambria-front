<template>
  <div class="home">
    <img alt="Headphones" height="250px" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to YourMusic streaming app" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
