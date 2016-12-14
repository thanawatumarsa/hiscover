<template lang="html">
  <select >
  <option @click="cateSearch(' cover')">Cover</option>
  <option @click="cateSearch(' guitar')">Guitar</option>
  <option @click="cateSearch(' drum')">Drum</option>
</select>
</template>

<script>
export default {
  props: ['cate-search'],
  data () {
    return {
    }
  }
}
</script>

<style lang="css">
</style>
