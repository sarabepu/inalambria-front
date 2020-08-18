<template>
  <div>
    <div
      v-if="isLoading"
      class="spinner-border"
      style="width: 3rem; height: 3rem;"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
    <div v-else id="app">
      <div id="nav">
        <router-link to="/">Home</router-link>&nbsp;|
        <router-link v-if="getUser === null" to="/login">Login</router-link>
        <span v-else>
          <router-link to="/music">Music</router-link>&nbsp;|
          <router-link to="/add">Add</router-link>&nbsp;|
          <router-link to="/playlist">Playlist</router-link>&nbsp;|
          <a>Welcome, {{ getUser }}</a>
        </span>
      </div>
      <router-view @eventname="updateparent" />
      <br />
      <Player v-bind:track="actual" />
    </div>
  </div>
</template>
<script>
import Player from "@/components/Player.vue";
export default {
  data: function() {
    return { isLoading: true, actual: {} };
  },
  methods: {
    updateparent(variable) {
      this.actual = variable;
    }
  },
  created: function() {
    fetch("https://inalambria.herokuapp.com/current", {
      credentials: "include",
      mode: "cors"
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.user) {
          localStorage.setItem("isAuth", res.user.username);
          console.log(localStorage);
        } else {
          localStorage.clear();
          //  window.location.href = "./Login";
        }
        this.isLoading = false;
      });
  },
  computed: {
    getUser() {
      return localStorage.getItem("isAuth");
    }
  },
  components: {
    Player
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: left;
  margin-left: 100pt;
  a {
    color: #42b983;
    font-weight: bold;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
</style>
