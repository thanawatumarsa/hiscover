<template>
  <menu :cate-search = "cate-search"></menu>
  <input type="text" v-model="keyword" placeholder="&#128269" @keyup.enter='search(keyword)'>
</template>

<script>
import Menu from '../components/Menu'

export default {
  props: ['search', 'cate-search'],
  data () {
    return {
      keyword: ''
    },
    components {
      Menu
    }
  }
}
</script>
