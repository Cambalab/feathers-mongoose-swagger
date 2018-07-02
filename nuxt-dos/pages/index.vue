<template>
  <div>
    <my-header/>
    <my-menu/>
    <router-view id="mainView"></router-view>
  </div>
</template>

<script>
  import Vue from 'vue'
  import MyHeader from '~components/myHeader.vue'
  import MyMenu from '~components/myMenu.vue'
  var VueI18n = require('vue-i18n')

  var locales = {
    es: {
      message: {
        contacto: 'Contacto',
        acercaDe: 'Acerca de mi',
        inicio: 'Inicio',
        indexTitle: 'Titulo Pagina Inicio',
        aboutTitle: 'Titulo pagina Acerca De',
        contactTitle: 'Titulo Pagina de Contacto',
        welcomeText: 'Bivendido a mi sitio hecho en VUE!',
        cambiarIdioma: 'Cambiar Idioma [EN]'
      }
    },
    en: {
      message: {
        contacto: 'Contact',
        acercaDe: 'About me',
        inicio: 'Index',
        indexTitle: 'Index Page Title',
        aboutTitle: 'About Page Title',
        contactTitle: 'Contact Page Title',
        welcomeText: 'Welcome to my VUE site!',
        cambiarIdioma: 'Change language [ES]'
      }
    }
  }

  Vue.use(VueI18n)

  Vue.config.lang = 'es'

  Object.keys(locales).forEach(function (lang) {
    Vue.locale(lang, locales[lang])
  })

  export default {
    ready: function () {
        console.log('started');
    },
    data: function () {
      return {
        who: 'its me'
      }
    },
    components: {
      MyHeader,
      MyMenu
    }
  }
</script>

<style scoped>
  #mainView{
    width: 70%;
    float: right;
  }
</style>
