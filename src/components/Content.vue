<template lang="html">
  <div class="content">
    <div class="video-container"  v-if="!showplay">
      <youtube :video-id="video" player-width="560" align="center" @ended="end()" :player-vars="{autoplay: 1}"></youtube>
    </div>
    <search-result :list = "list" :select = "select" :toggleshow = "toggleshow" :pl = "pl" :showplaylist = "showplaylist" :showpl = "showpl"></search-result>
  </div>
</template>

<script>
import SearchResult from '../components/SearchResult'

export default {
  props: ['end', 'list', 'select', 'show', 'pl', 'showplaylist', 'showpl'],
  data () {
    return {
    }
  },
  components: {
    SearchResult
  }
}
</script>
