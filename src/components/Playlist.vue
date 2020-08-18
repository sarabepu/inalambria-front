<template>
  <div class="container">
    <h3>Tracks List</h3>
    <br />
    <b-form-input placeholder="Search by artist, track name"></b-form-input>
    <b-table borderless hover head-variant :items="items" :fields="fields">
      <template v-slot:cell(Action)="data">
        <b-icon icon="play" @click="playClick(data.item)"></b-icon>
      </template>
    </b-table>
    <br />
    <br />
  </div>
</template>
<script>
export default {
  props: {
    items: Array
  },
  methods: {
    playClick(data) {
      console.log(1);
      this.$emit("passToPlayer", data);
    }
  },
  data: function() {
    return {
      fields: ["Action", "name", "artist", "username"],
      actual: ""
    };
  }
};
</script>
