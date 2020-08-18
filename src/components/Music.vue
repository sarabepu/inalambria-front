<template>
  <div class="container">
    <h3>Tracks List</h3>
    <br />
    <b-form-input placeholder="Search by artist, track name"></b-form-input>
    <b-table borderless hover head-variant :items="items" :fields="fields">
      <template v-slot:cell(Action)="data">
        <b-icon icon="play" @click="playClick(data.item)"></b-icon>
      </template>
      <template v-slot:cell(Add)="data">
        <AddPlaylist
          v-bind:trackId="data.item._id"
          v-bind:playlist="parsedLists"
        />
      </template>
    </b-table>
    <div
      v-if="isLoading"
      class="spinner-border"
      style="width: 3rem; height: 3rem"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
    <br />
    <br />
  </div>
</template>
<script>
import AddPlaylist from "@/components/AddPlaylist.vue";
export default {
  methods: {
    playClick(data) {
      this.$emit("eventname", data);
    }
  },
  data: function() {
    return {
      fields: ["Action", "name", "artist", "username", "Add"],
      actual: "",
      items: [],
      isLoading: true,
      playList: []
    };
  },
  computed: {
    parsedLists() {
      return this.playList.map(p => {
        let o = {};
        o.value = p._id;
        o.text = p.name;
        return o;
      });
    }
  },
  mounted: function() {
    fetch("https://inalambria.herokuapp.com/getData", {
      method: "POST",
      credentials: "include",
      mode: "cors",
      body: JSON.stringify({ collection: "tracks", query: {} }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        this.items = res;
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
            console.log(res);
            this.playList = res;
            this.isLoading = false;
          });
      });
  },
  components: {
    AddPlaylist
  }
};
</script>
<style land="scss"></style>
