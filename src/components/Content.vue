<template lang="html">
  <div class="content">
    <div class="cardContent">
      <div class="video-container"  v-if="!showplay">
        <youtube :video-id="video" player-width="560" align="center" @ended="end()" :player-vars="{autoplay: 1}"></youtube>
      </div>
        <div id="textmenu"   v-if="showplay">
          Please Select Your Video
        </div>
      <div class="textContent">
        {{playlist[0].snippet.title}}
      </div>
    </div>
    <div id="textmenu">
      Search Result
    </div><hr>
    <search-result :list = "list" :select = "select" :toggleshow = "toggleshow" :pl = "pl" :showplaylist = "showplaylist" :showpl = "showpl"></search-result>
  </div>
</template>

<script>
import SearchResult from '../components/SearchResult'

export default {
  props: ['video', 'end', 'list', 'select', 'show', 'playlist', 'pl', 'showplaylist', 'showpl', 'showplay'],
  data () {
    return {
    }
  },
  components: {
    SearchResult
  }
}
</script>
