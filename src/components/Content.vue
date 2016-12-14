<template lang="html">
  <div class="content">
    <search-result :list = "list" :select = "select" :toggleshow = "toggleshow" :pl = "pl" :showplaylist = "showplaylist" :showpl = "showpl"></search-result>
  </div>
</template>

<script>
import SearchResult from '../components/SearchResult'

export default {
  props: ['list', 'select', 'show', 'pl', 'showplaylist', 'showpl'],
  data () {
    return {
    }
  },
  components: {
    SearchResult
  }
}
</script>
