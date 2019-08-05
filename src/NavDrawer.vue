<!-- 
    TODO:
        1) Fix Routerlink CSS
        
-->
<template>
    <v-navigation-drawer
        v-bind:value="value"
        app
        dark
        bottom
        fixed
    > 



        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
        >

            <router-link
                replace
                :to = "item.routerPath"   
            >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </router-link>
            
        </v-list-item>

  

    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'NavDrawer',
    props: {
        value: {
            type: Boolean,
            default: false
        }   
    },
    data () {
        return {
            drawer: 'drawer',
            items: [
                { title: 'Dashboard', icon: 'mdi-home', routerPath: '/'},
                { title: 'Search Website', icon: 'mdi-magnify', routerPath: '/websites'},
                { title: 'Article Dashboard', icon: 'mdi-ballot-outline', routerPath: '/articles'},
                { title: 'Social Media', icon: 'mdi-account-multiple-outline', routerPath: '/socialmedia'},
                { title: 'Top Hits', icon: 'mdi-trending-up', routerPath: '/tophits'},
                { title: 'Check Issues', icon: 'mdi-alert-circle-outline', routerPath: '/issues'},
                { title: 'Scraper Checker', icon: 'mdi-file-find-outline', routerPath: ''},
                { title: 'Crawler Stats', icon: 'mdi-poll', routerPath: '/crawlerstats'},
                { title: 'Scraper Data & Infra Monitoring', icon: 'mdi-clipboard-outline', routerPath: '/infrascraper'},
                { title: 'Settings', icon: 'mdi-settings-outline', routerPath: '/settings'},
                { title: 'Sign Out', icon: 'mdi-power', routerPath: '/logout'},
            ]
        }
    }
}
</script>

<style>
    a {
        text-decoration: none !important;
        color: white;
        
    }
</style>
