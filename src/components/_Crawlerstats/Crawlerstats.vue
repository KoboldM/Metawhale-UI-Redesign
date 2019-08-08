<!-- 
    TODO: 
        1) Add Date and Time w/ Live Display
        2) Fix font proportion and scaling of MediaMeter ( #mediaMeterInPage )
        3) Graph
        4) table of crawler stats visits w/ card
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

            <span id = "dateInPage"> As of <!-- {{curDateTime | momentFilter}} --> {{curDateTime}}  </span> 
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
            /* curDateTime: Date.now() */
            curDateTime: '',
            oldDateTime: ''
        }
    },
    filters: {
        momentFilter: function(value) {
            return moment(value).format('LLLL')
        }
    },
    created() {
        this.oldDateTime = new Date();
        setInterval(() => { 
            this.curDateTime = moment(this.oldDateTime).format('LLLL'); 
            }, 1000)
    }
}
</script>

<style scoped>
    @import './designCrawlerstats.css' ;
</style>

