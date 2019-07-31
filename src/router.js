import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
  /*   {
      media-meter.net/datascraper (dashboard)
      path: '/',
      name: 'dashboard',
      component: () => import('')
    }, */
    {
      //media-meter.net/datascraper/login
      path: '/login',
      name: 'login',
      component: () => import( /* */ './components/_Login/Login.vue')
    },
/*     {
      //media-meter.net/datascraper/websites
      path: '/websites',
      name: 'websites',
      component: () => import('./components/_Websites/Websites.vue')
    },
    {
      //media-meter.net/datascraper/tophits
      path: '/tophits',
      name: 'tophits',
      component: () => import('./components/_Tophits/Tophits.vue')
    },
    {
      //media-meter.net/datascraper/crawlerstats
      path: '/crawlerstats',
      name: 'crawlerstats',
      component: () => import('./components/_Crawlerstats/Crawlerstats.vue')
    }, */
    {
      //media-meter.net/datascraper/infrascraper
      path: '/infrascraper',
      name: 'infrascraper',
      component: () => import('./components/_Infrascraper/Infrascraper.vue')
    }/* ,
    {
      //media-meter.net/datascraper/issues
      path: '/issues',
      name: 'issues',
      component: () => import('./components/_Issues/Issues.vue')
    },
    {
      //media-meter.net/datascraper/socialmedia
      path: '/socialmedia',
      name: 'socialmedia',
      component: () => import('./components/_Socialmedia/Socialmedia.vue')
    },
    {
      //media-meter.net/datascraper/articles
      path: '/articles',
      name: 'articles',
      component: () => import('./components/_Articles/Articles.vue')
    },
    {
      //media-meter.net/datascraper/settings
      path: '/settings',
      name: 'settings',
      component: () => import('')
    } */
  ]
})
