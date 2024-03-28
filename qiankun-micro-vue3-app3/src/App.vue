<!--
 * @Describe: 
 * @Date: 2024-03-22 18:19:45
 * @LastEditors: Cosima
 * @LastEditTime: 2024-03-28 20:32:11
 * @FilePath: /qiankun-demo/qiankun-micro-vue3-app3/src/App.vue
-->
<template>
  <router-link to="/mila">mila</router-link> |
  <router-link to="/malena">malena</router-link>
  <router-view />
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from './components/HelloWorld.vue'

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
