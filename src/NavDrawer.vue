<template>
    <v-navigation-drawer
        v-bind:value="value"
        v-on:input="$emit('input', $event)"
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


            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>

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
                { title: 'Dashboard', icon: 'mdi-home'},
                { title: 'Search Website', icon: 'mdi-magnify'},
                { title: 'Article Dashboard', icon: 'mdi-ballot-outline'},
                { title: 'Social Media', icon: 'mdi-account-multiple-outline'},
                { title: 'Top Hits', icon: 'mdi-trending-up'},
                { title: 'Check Issues', icon: 'mdi-alert-circle-outline'},
                { title: 'Scraper Checker', icon: 'mdi-file-find-outline'},
                { title: 'Crawler Stats', icon: 'mdi-poll'},
                { title: 'Scraper Data & Infra Monitoring', icon: 'mdi-clipboard-outline'},
                { title: 'Settings', icon: 'mdi-settings-outline'},
                { title: 'Sign Out', icon: 'mdi-power'},
            ]
        }
    }
}
</script>