<template>
  <div class="container">
    <form v-on:submit.prevent="onSubmit">
      <h3>Sign In</h3>

      <div class="form-group">
        <label>Email address</label>
        <input
          type="text"
          v-model="username"
          placeholder="jsprieto10"
          class="form-control form-control-lg"
        />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="*****"
          class="form-control form-control-lg"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign In
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return { username: "", password: "" };
  },
  methods: {
    onSubmit: function() {
      fetch("https://inalambria.herokuapp.com/login", {
        method: "POST",
        body: JSON.stringify({
          username: this.$data.username,
          password: this.$data.password
        }),
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      }).then(res => {
        if (res.status === 200) {
          localStorage.setItem("isAuth", this.$data.username);
          window.location.href = "../";
        } else {
          alert("error");
        }
      });
    }
  }
};
</script>

<style lang="scss"></style>
