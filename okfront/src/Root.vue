<template>
  <Page></Page>
</template>

<script>
import Page from './components/Page.vue'

export default {
  name: 'Root',
  components: {
    Page
  }
}
</script>

<style>
#root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1250px;
  margin: auto;
}

@media (max-width: 1250px) {
  #root {
    width: 100%; /* 当屏幕宽度小于1250px时，设置宽度为100% */
  }
}


body {
  margin: 0;
  background-color: #ecf0f1
}
</style>
