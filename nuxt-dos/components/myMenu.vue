<template>
  <div id="mainMenu">
    <h1>Menu</h1>
    <h1 @click="cambiarIdioma">{{$t("message.cambiarIdioma")}}</h1>
    <ul>
      <li v-for="link in links">
        <router-link :to="link.route">
          {{ link.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    methods: {
      cambiarIdioma: function () {
        if(Vue.config.lang == 'es') {
          Vue.config.lang = 'en'
        }
        else{
          Vue.config.lang = 'es'
        }
      }
    },
    data: function () {
      return {
        links: [
          {
            route: '/',
            name: 'inicio'
          },
          {
            route: '/contact',
            name: 'contact'
          },
          {
            route: '/about',
            name: 'about'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  #mainMenu{
    width: 30%;
    float: left;
  }
</style>
