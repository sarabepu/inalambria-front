<template>
  <div class="container">
    <h3>PlayList</h3>
    <br />
    <b-tabs content-class="mt-3" fill>
      <b-tab title="Create new playlist " active>
        <b-form @submit.prevent="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Name"
            label-for="input-1"
            description="The name can be repeated"
          >
            <b-form-input
              id="input-1"
              type="text"
              v-model="name"
              required
              placeholder="Salsa brava"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Send</b-button>
        </b-form>
        <b-alert variant="success" show v-if="this.success">Success</b-alert>
        <b-alert show v-if="fail" variant="danger" dismissible
          >Something went wrong</b-alert
        >
      </b-tab>
      <b-tab title="My playlists">
        <div>
          <b-card no-body>
            <b-tabs pills card vertical end>
              <b-tab
                v-for="playlist in playlists"
                :key="playlist._id"
                :title="playlist.name"
              >
                <Playlist
                  @passToPlayer="updateparent"
                  v-bind:items="playlist.tracks"
                />
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>
<script>
import Playlist from "@/components/Playlist.vue";
export default {
  data: function() {
    return { success: false, fail: false, name: "", playlists: [] };
  },
  methods: {
    updateparent(variable) {
      console.log(2);
      this.$emit("eventname", variable);
    },
    onSubmit() {
      if (this.name) {
        fetch("https://inalambria.herokuapp.com/createList/" + this.name, {
          credentials: "include",
          mode: "cors"
        }).then(res => {
          if (res.status == 200) {
            this.name = "";
            this.success = true;
            console.log(this.$data);
          }
        });
      } else {
        this.fail = true;
      }
    }
  },

  mounted: function() {
    console.log("se esta montando");
    fetch("https://inalambria.herokuapp.com/getData", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({
        collection: "playList",
        query: { owner: localStorage.getItem("isAuth") }
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log("que paso", res);
        this.playlists = res;
      });
  },
  components: {
    Playlist
  }
};
</script>
<style land="scss"></style>
