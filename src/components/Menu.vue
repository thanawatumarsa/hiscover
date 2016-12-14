<template lang="html">
  <div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a @click="cateSearch(' cover')">Cover</a>
    <a @click="cateSearch(' guitar')">Guitar</a>
    <a @click="cateSearch(' drum')">Drum</a>
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
