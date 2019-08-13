<template>
  <v-app>
    <NavDrawer 
      v-model="drawer"
    />

    <v-app-bar  
      color= "#5952a1"
      app
    >

    <!-- 
      can try to use v-img??? 
      change the placeholder too
      -->
    <img
      src = "./assets/logo.png"
      height = 50px;
      width = 50px;
      style = "background-color: black;"
    >

    <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"  
    ></v-app-bar-nav-icon>


    <v-toolbar-title>
      <span id = "toolbarSubTitle">Data Scraper</span>
    </v-toolbar-title>

    </v-app-bar>

    <v-content>
      <router-view
        style = "background-color: #dcddde;"
      />
    </v-content>

  </v-app>
</template>

<script>
import NavDrawer from './NavDrawer.vue'

export default {
  name: 'App',
  components: {
    NavDrawer
  },
  data: () => ({
    drawer: true,
    elevateOnScroll: false
  })
} 

/* const store = new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  getters: {

  }
}) */
</script>

<style>
  @font-face {
    font-family: Comforta;
    src: url('./assets/fonts/Comfortaa-Bold.ttf');
  }
  @font-face {
    font-family: Avenir;
    src: url('./assets/fonts/AvenirLTStd-Medium.otf');
  }
  @import './assets/appStyles.css';
</style>

