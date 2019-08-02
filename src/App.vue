<template>
  <v-app>
    <NavDrawer 
      v-model="drawer"
    />

    <v-app-bar
      color= "#5952a1"
      app
    >

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
      <span id = "toolbarTitle">media meter </span>
      <span id = "toolbarSubTitle">Data Scraper</span>
    </v-toolbar-title>

    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
import NavDrawer from './NavDrawer.vue'

export default {
  name: 'App',
  components: {
    NavDrawer,
  },
  data: () => ({
    drawer: false,
    elevateOnScroll: false,
  })
} 
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
  #toolbarTitle {
    font-weight: bold;
    color: #f78b1e;
    font-family: Comforta;
  }
  #toolbarSubTitle {
    font-weight: bolder;
    color: #dcddde;
    font-family: Avenir;
  }
  #divLocationIndicator {
      height: 90px;
      width: auto;
      background-color: #F78B1E;
      font-family: Avenir;
      font-size: 40px;
      font-weight: lighter;
      padding-left: 8px;
      padding-top: 12px;
  }

</style>

