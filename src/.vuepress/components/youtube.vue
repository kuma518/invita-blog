<!--
  A simple `iframe` embed (like copied from youtube directly) it NOT responsive
-->

<template>
  <div class="renderingAreaProvider">
    <iframe :src="url" loading="lazy" allowfullscreen />
  </div>
</template>

<script>
export default {
  props: ["id", "start"],
  computed: {
    url() {
      let origin = "https://www.youtube.com"
      let path = `/embed/${this.id}`
      let params = `?start=${this.start ?? "0"}`

      return origin + path + params
    }
  }
}
</script>

<style>
.renderingAreaProvider {
  position: relative;
  /* `56.25%` indicates the aspect rasio (9/16 = 56.25%). */
  padding-bottom: calc(56.25%);

  /* usually 16px */
  margin-top: 1rem;
  margin-bottom: 1rem;

  background: rgba(211, 211, 211, 0.5);
  opacity: 0.9;
}

iframe {
  position: absolute;
  width: 100%;
  height: 100%;

  border: none;
}
</style>
