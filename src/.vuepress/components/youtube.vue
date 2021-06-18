<template>
  <div class="renderingAreaProvider">
    <iframe :src="src" loading="lazy" allowfullscreen />
  </div>
</template>

<script>
export default {
  props: ["id", "start"],
  computed: {
    src() {
      let origin = "https://www.youtube.com"
      let path = `/embed/${this.id}`
      let params = `?start=${this.start ?? "0"}`

      let url = origin + path + params
      return url
    }
  }
}
</script>

<style>
/* IDK css, I copied this */

.renderingAreaProvider {
  position: relative;
  /* `56.25%` indicates the aspect rasio (9/16 = 56.25%). */
  padding-bottom: calc(56.25%);

  /* default: 16px */
  margin-top: 1rem;
  margin-bottom: 1rem;

  background: lightgray;
}

iframe {
  position: absolute;
  width: 100%;
  height: 100%;

  border: none;
}
</style>
