<template>
  <div id="app">
    <p>
      <router-link to="/home">Go to Home</router-link>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <router-link to="/write">Go to Write</router-link>
      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <router-link to="/story/123">Go to Story</router-link>
    </p>
    <hr>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view :state="state"></router-view>
  </div>
</template>

<script>
// import Hello from './components/Hello'

export default {
  name: 'app',
  data () {
    return {
      state: {
        storys: [
          {
            id: 1,
            title: 'Hello Vue Medium',
            body: 'Quis consectetur for incidunt. Aliquam quia. Velitesse exercitationem so incididunt veniam ipsa but nihil lorem. Totam. Quae eaque omnis or consequuntur in yet fugit. Sunt beatae yet eu for quisquam velit natus for vel. Voluptatem aliquid ex. Modi vitae. Perspiciatis. Tempora exercitation for beatae but accusantium et. Ullamco consequuntur voluptate or aliquid but natus quia illum. Quaerat quo and sunt or adipisicing, for adipisci and et and reprehenderit. Tempora consequat laboris reprehenderit do.'
          },
          {
            id: 2,
            title: 'Quis consectetur',
            body: 'Aliquid. Sint. Eaque unde ad odit so quia and perspiciatis and corporis. Dolor magni but modi for consectetur dolorem so consectetur. Architecto enim yet ullam magna for laboris aut and exercitationem. Eos exercitationem yet aliquam or reprehenderit. Quisquam dicta, yet magni totam so ipsam sequi. Corporis iure labore. Perspiciatis. Consequuntur error or tempora but aute aspernatur. Corporis occaecat magna proident, laboriosam. Nequeporro in and nulla but sed.'
          }
        ]
      }
    }
  },
  components: {
    // Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
