<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Search initial-search="vuejs"/>
    <List />
  </div>
</template>

<script>
import List from '@/components/List'
import Search from '@/components/Search'

export default {
  name: 'App',
  components: {
    List,
    Search
  }
}

// add props for initial search
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>