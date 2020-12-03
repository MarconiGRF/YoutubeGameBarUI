<template>
  <div>
    <iframe id="player" type="text/html" :src="completeLink" allow="autoplay; encrypted-media" autoplay="1" frameborder="0">
    </iframe>
  </div>
</template>

<script>
export default {
  name: "PlaylistUI",
  props: {
    playlistId: String
  },
  data: function() {
    return {
      completeLink: "https://www.youtube.com/embed/videoseries?list=" + this.playlistId
    }
  }
}
</script>

<style scoped>
  iframe, div {
    width: 100vw;
    height: 100vh;
  }
</style>
