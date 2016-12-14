<template>
  <input type="text" v-model="keyword" placeholder="&#128269" @keyup.enter='search(keyword)'>
</template>

<script>
export default {
  props: ['search'],
  data () {
    return {
      keyword: ''
    }
  }
}
</script>
