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
            <span id = "dateInPage"> {{test}} </span> 
        </div>

    </v-app>
</template>

<script>
export default {
    name: 'Crawlerstats'
}
</script>

<style>
    #mediaMeterDate {
        text-align: center;
    }
    #mediaMeterInPage {
        font-family: 'Comforta';
        color: #5952a1;
    }
    #dateInPage {
        font-family: 'Avenir';
        font-weight: lighter;
    }
</style>

