<template lang="html">
      <div class="card" >
          <div @click="select(list[index])">
            <a href="#"><img class="imgLink" v-bind:src="list[index].snippet.thumbnails.medium.url" ></a>
          </div>
          <div class="nameLink">
            {{ list[index].snippet.title }}<br>
        </div>
        <div class="addPlaylist">
          <a href="#"><button class="addButt" name="button" @click="pl(list[index])">+</button></a>
        </div>
      </div>
</template>

<script>
export default {
  props: ['list', 'select', 'toggleshow', 'index', 'pl', 'showplaylist', 'showpl'],
  data () {
    return {}
  }
}
</script>

<style lang="css">
</style>
