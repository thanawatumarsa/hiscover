<template>
  <div class="hello">
    <h1>Write</h1>
    <button @click="add">add</button>
    {{ state }}
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['state'],
  data () {
    return {}
  },
  methods: {
    add () {
      this.state.storys.push({
        id: 3,
        title: 'Hello Vue Medium',
        body: 'Quis conse'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
