<template>
  <div class="hello">
    <h1>Home</h1>
    <ul>
      <li v-for="story in state.storys">
        {{ story.title }}
      </li>
    </ul>
    {{ state.storys }}
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['state'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
