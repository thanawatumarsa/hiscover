<template lang="html">
  <div id="playlists">
      <div v-for="youtube in list">
        <list-video :list = "list" :select = "select" :toggleshow = "toggleshow" :index ="$index" :pl = "pl" :showplaylist = "showplaylist" :showpl = "showpl"></list-video>
      </div>
    </div>

</template>

<script>
import ListVideo from '../components/ListVideo'

export default {
  props: ['list', 'select', 'toggleshow', 'pl', 'showplaylist', 'showpl'],
  data () {
    return {}
  },
  components: {
    ListVideo
  }
}
</script>

<style lang="css">
</style>
