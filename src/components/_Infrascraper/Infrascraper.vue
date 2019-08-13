<!-- 
    TODO:
        1) Scaling Font for subCardDataDisplay
        2) Add picture to cards ( 7 icons )
        3) Live updating (endpoint?) on data display
        4) Fix grid and scaling of cards & layout
 -->
<template>
    <v-app>
            <div>
                <v-responsive style = "
                background-color: orange;"
                id = "divLocationIndicator"
                vue-resize-text>

                Scraper Data & Infra Monitoring

                </v-responsive>
            </div>
        
    <!-- Local DB Queued -->
    <v-layout>
        <v-container grid-list-md fluid>
            <v-layout row wrap justify-start>
                <v-flex>  
                    <v-card dark>
                        <v-card-title class = "justify-center">Local DB Queued</v-card-title>
                            <v-card light id = "subCard">
                                <v-card-text id = "subCardDataDisplay">3213</v-card-text>
                            </v-card>
                    </v-card>
                </v-flex>

                <!-- Local DB Processing -->
                <v-flex>
                    <v-card dark>
                        <v-card-title class = "justify-center">Local DB Processing</v-card-title>
                            <v-card light id = "subCard">
                                <v-card-text id = "subCardDataDisplay">136</v-card-text>
                            </v-card>
                    </v-card>
                </v-flex>

                <!-- Local DB Max ID -->
                <v-flex>
                    <v-card dark>
                        <v-card-title class = "justify-center">Local DB Max ID</v-card-title>
                            <v-card light id = "subCard">
                                <v-card-text id = "subCardDataDisplay">10,744,964</v-card-text>
                            </v-card>
                    </v-card>
                </v-flex>

                <!-- Product DB Max ID -->
                <v-flex>
                    <v-card dark>
                        <v-card-title class = "justify-center">Product DB Max ID </v-card-title>
                            <v-card light id = "subCard">
                                <v-card-text id = "subCardDataDisplay">6748</v-card-text>
                            </v-card>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
            
        <v-container grid-list-sm fluid>
            <v-layout justify-center column fill-height>
                <v-flex>
                    <v-card light id = "subCard">
                        <v-img src="https://via.placeholder.com/100x100" width = "100" height = "100"/>
                        <v-card-title id = "NBRSSStyle" class = "justify-center">News</v-card-title>
                        <v-card-text id = "subCardDataDisplay">458,370 / 458,372</v-card-text>
                    </v-card>
                </v-flex>

                <v-flex>
                    <v-card light id = "subCard">
                        <v-img src="https://via.placeholder.com/100x100" width = "100" height = "100"/>
                        <v-card-title id = "NBRSSStyle" class = "justify-center">Blog</v-card-title>
                        <v-card-text id = "subCardDataDisplay">469,391 / 469,397</v-card-text>
                    </v-card>
                </v-flex>

                <v-flex>
                    <v-card >
                        <v-img src="https://via.placeholder.com/100x100" width = "100" height = "100"/>
                        <v-card-title id = "NBRSSStyle" class = "justify-center">RSS</v-card-title>
                        <v-card-text id = "subCardDataDisplay">646,291 / 646,292</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-layout>

    </v-app>
</template>

<script>

export default {
    name: 'Infrascraper'
}
</script>

<style scoped>
    @import './Infrascraper.css';
</style>
