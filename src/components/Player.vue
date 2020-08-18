<template>
  <div class="fluid-container">
    <audio
      controls
      autoplay
      :src="getUrl"
      type="audio/mpeg"
      crossorigin="use-credentials"
    ></audio>
    <span>
      now playing,
      <a>{{ track.name }}</a> from:
      <a>{{ track.artist }}</a>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    track: Object
  },
  computed: {
    getUrl() {
      let id = this.$props.track ? this.$props.track._id : "";
      return "https://inalambria.herokuapp.com/tracks/" + id;
    }
  }
};
</script>
<style lang="scss" scoped>
.fluid-container {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 40px;
  background-color: white;
}
a {
  color: #039afa !important;
  font-weight: bold !important;
}
audio::-webkit-media-controls-panel {
  background-color: white;
}
audio {
  height: 15px;
  outline: none;
  width: 40%;
}
</style>
