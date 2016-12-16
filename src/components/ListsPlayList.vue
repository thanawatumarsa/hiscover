<template lang="html">
  <div class="" v-if = "playlist !== null">
    <div class="cardPlaylist">
      <div class="contentPlaylist color1" v-if = "index === 0">
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
      <div class="contentPlaylist color2" v-else>
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
      <div class="changePositionPL">
        <button type="button" class = "changeUp" v-if="index !== 0" @click="changeplaylistup(playlist[index], index)" name="button">▲</button><br>
        <button type="button" class = "changeDown" v-if="index !== playlist.length - 1 && index !== 0 " @click="changeplaylistdown(playlist[index], index)" name="button">▼</button>
        <button type="button" class = "changeDownFirst" v-if="index === 0" @click="changeplaylistdown(playlist[index], index)" name="button">▼</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['playlist', 'deleteplaylist', 'index', 'select', 'changeplaylistup', 'changeplaylistdown'],
  data () {
    return {}
  }
}
</script>

<style lang="css">
</style>
