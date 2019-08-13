<!-- 
    TODO: 
        1) Fix font proportion and scaling of MediaMeter ( #mediaMeterInPage )
        2) Graph
        3) table of crawler stats visits w/ card
-->

<template>
    <v-app>
        <div>
            <v-responsive style = "
                background-color: orange;"
                id = "divLocationIndicator"
                vue-resize-text
            >
            Crawler Stats
            </v-responsive>
        </div>

        <div id = "mediaMeterDate">
            <p id = "mediaMeterInPage"> media meter </p>
            <span id = "dateInPage">As of {{curDateTime}}</span> 
        </div>

    </v-app>
</template>

<script>
import { setInterval } from 'timers';
var moment = require('moment');

export default {
    name: 'Crawlerstats',
    data() {
        return {
            curDateTime: ''
        }
    },
    created() {
        setInterval(() => {
            this.curDateTime = moment().format('LLLL')
        }, 1000)
    }
}
</script>

<style scoped>
    @import './designCrawlerstats.css' ;
</style>

