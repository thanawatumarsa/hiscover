<template lang="html">
    <div id="boxmenu">
  <div id="textmenu">
    Categories
  </div><hr>
  <div id="menu">
    <button class="button" @click="cateSearch(' cover')">Cover</button>
    <button class="button" @click="cateSearch(' guitar')">Guitar</button>
    <button class="button" @click="cateSearch(' drum')">Drum</button>
  </div>
</div>
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
