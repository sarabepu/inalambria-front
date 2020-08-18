<template>
  <div class="container">
    <h3>Add song</h3>
    <form @submit.prevent="onSubmit" enctype="multipart/form-data" ref="form">
      <div class="form-group row">
        <label for="file" class="col-sm-2 col-form-label">Archivo</label>
        <div class="col-sm-10">
          <input
            type="file"
            name="track"
            id="file"
            class="form-control-file"
            required
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="artista" class="col-sm-2 col-form-label">Artista</label>
        <div class="col-sm-10">
          <input
            type="text"
            name="artist"
            id="artista"
            class="form-control"
            required
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="nameS" class="col-sm-2 col-form-label"
          >Nombre de la canción</label
        >
        <div class="col-sm-10">
          <input
            type="text"
            name="name"
            id="nameS"
            class="form-control"
            required
          />
        </div>
      </div>

      <div v-if="info">{{ info }}</div>
      <div
        v-if="isLoading"
        class="spinner-border"
        style="width: 3rem; height: 3rem;"
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
      <input type="submit" value="Upload" />
    </form>
  </div>
</template>
<script>
export default {
  data: function() {
    return { info: "", isLoading: false };
  },
  methods: {
    onSubmit: function() {
      this.isLoading = true;
      const datos = new FormData(this.$refs.form);
      const options = {
        method: "POST",
        body: datos,
        credentials: "include",
        mode: "cors"
      };
      fetch("https://inalambria.herokuapp.com/tracks", options).then(res => {
        if (res.status != 201) {
          this.info = "Something went wrong, the max size is 16mb";
        } else this.info = "File has been upload succesfully";

        this.$refs.form.reset();
        this.isLoading = false;
      });
    }
  }
};
</script>
