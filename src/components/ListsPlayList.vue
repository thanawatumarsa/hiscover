<template lang="html">
  <div class="cardPlaylist fade-in one color1" v-if = "index === 0">
    {{ playlist[index].index}}
    <div class="imgPL">
      <div @click="select(playlist[index])">
        <a href="#"><img v-bind:src="playlist[index].snippet.thumbnails.medium.url" style="width : 100%; height : 100%;" ></a>
      </div>
    </div>
  <button type="button" class="del" @click="deleteplaylist(index)" name="button">x</button>
  <div class="namePL">
    {{ playlist[index].snippet.title }}<br>
  </div>
  </div>
  <div class="cardPlaylist fade-in one color" v-else>
    {{ playlist[index].index}}
    <div class="imgPL">
      <div @click="select(playlist[index])">
        <a href="#"><img v-bind:src="playlist[index].snippet.thumbnails.medium.url" style="width : 100%; height : 100%;" ></a>
      </div>
    </div>
  <button type="button" class="del" @click="deleteplaylist(index)" name="button">x</button>
  <div class="namePL">
    {{ playlist[index].snippet.title }}<br>
  </div>
  </div>
</template>

<script>
export default {
  props: ['playlist', 'deleteplaylist', 'index', 'select'],
  data () {
    return {}
  }
}
</script>

<style lang="css">
</style>
