import Vue from 'vue'
import Router from 'vue-router'

import Login from './components/_Login/Login.vue'
import Websites from './components/_Websites/Websites.vue'
import Tophits from './components/_Tophits/Tophits.vue'
import Crawlerstats from './components/_Crawlerstats/Crawlerstats.vue'
import Infrascraper from './components/_Infrascraper/Infrascraper.vue'
import Issues from './components/_Issues/Issues.vue'
import SocialMedia from './components/_Socialmedia/Socialmedia.vue'
import Articles from './components/_Articles/Articles.vue'
import Settings from './components/_Settings/Settings.vue'
import Scraperchecker from './components/_Scraperchecker/Scraperchecker.vue'
import Logout from './components/_Logout/Logout.vue'

Vue.use(Router)

export default new Router({
  routes: [
/*      {
      //media-meter.net/datascraper (dashboard) // to import
      path: '/',
      name: 'dashboard',
      component: () => import('')
    },  */
    {
      //media-meter.net/datascraper/login
      path: '/login',
      name: 'login',
      component: Login
    },
     {
      //media-meter.net/datascraper/websites
      path: '/websites',
      name: 'websites',
      component: Websites
    },
    {
      //media-meter.net/datascraper/tophits
      path: '/tophits',
      name: 'tophits',
      component: Tophits
    },
    {
      //media-meter.net/datascraper/crawlerstats
      path: '/crawlerstats',
      name: 'crawlerstats',
      component: Crawlerstats
    }, 
    {
      //media-meter.net/datascraper/infrascraper
      path: '/infrascraper',
      name: 'infrascraper',
      component: Infrascraper
    },
    {
      //media-meter.net/datascraper/issues
      path: '/issues',
      name: 'issues',
      component: Issues
    },
    {
      //media-meter.net/datascraper/socialmedia
      path: '/socialmedia',
      name: 'socialmedia',
      component: SocialMedia
    },
    {
      //media-meter.net/datascraper/articles
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      //media-meter.net/datascraper/settings
      path: '/settings',
      name: 'settings',
      component: Settings
    }, 
    {
      //media-meter.net/datascraper/scraperchecker
      path: '/scraperchecker',
      name: 'scraperchecker',
      component: Scraperchecker
    },
    {
      //media-meter.net/datascraper/logout
      path: '/logout',
      name: 'logout',
      component: Logout
    }
  ]
})

