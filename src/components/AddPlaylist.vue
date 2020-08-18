<template>
  <div>
    <b-icon icon="plus" id="show-btn" @click="showModal"></b-icon>
    <b-modal ref="my-modal" hide-footer title="Add to a playlist">
      <div class="d-block text-center">
        <h3>Select the playlist</h3>
        <b-form-select v-model="selected" :options="playlist"></b-form-select>
      </div>
      <b-button class="mt-3" variant="outline-success" block @click="hideModal"
        >Add</b-button
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  props: {
    playlist: Array,
    trackId: String
  },
  data: function() {
    return { selected: null };
  },
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      if (this.selected) {
        fetch("https://inalambria.herokuapp.com/addToList", {
          method: "POST",
          credentials: "include",
          mode: "cors",
          body: JSON.stringify({
            playlist: this.selected,
            trackId: this.trackId
          }),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(() => this.$refs["my-modal"].hide());
      }
    }
  }
};
</script>
