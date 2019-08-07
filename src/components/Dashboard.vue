<!--
    TODO:
        1) Data Values should be updated from endpoints - current numbers are placeholders
        2) Time should be automatic update interval

-->
<template>
<v-app>
        <div>
            <v-responsive style = "
                background-color: orange;"
                id = "divLocationIndicator"
                vue-resize-text
            >
            Dashboard
            </v-responsive>

            <div id = "mediaMeterDate">
                <p id = "mediaMeterInPage"> media meter </p>

                <span id = "dateInPage"> As of: timeplaceholder </span> 
            </div>

            <v-layout wrap row>
                <v-flex d-flex xs12 md6 xl6>
                    <v-card dark>
                        <v-card-title id = "mainCardTitle"> Articles </v-card-title>

                            <v-card-text id = "mainDataNumber">4823.4</v-card-text>
                            <v-card-text id = "subDataText">This Week's Daily Average</v-card-text>

                            <v-layout>
                                <v-flex xs12>
                                    <v-card flat light id = "subCard">

                                        <v-card-title id = "mainCardTitle">Metawhale</v-card-title>

                                        <v-card-text id = "dataNumber">10,592</v-card-text> 
                                        <v-card-text id = "subDataTextLight">Total Articles</v-card-text>

                                    </v-card>
                                </v-flex>
                            </v-layout>

                            <v-layout>
                                <v-flex>
                                    <v-card flat light id = "subCard">
                                            <v-layout>
                                                <v-card-text id = "dataNumber">0</v-card-text> 
                                                <v-card-text id = "subDataTextLight">On Hold</v-card-text>
                                                
                                                <v-card-text id = "dataNumber">100</v-card-text> 
                                                <v-card-text id = "subDataTextLight">On Queue</v-card-text>
                                            </v-layout>
                                    </v-card>
                                </v-flex>
                            </v-layout>

                            <v-layout column>
                                <v-card flat light id = "subCard">
                                    <v-card-title id = "mainCardTitle">MMI</v-card-title>

                                        <v-card-text id = "dataNumber">0</v-card-text> 
                                        <v-card-text id = "subDataTextLight">Total Article Count</v-card-text>

                                        <v-card-text id = "dataNumber">994</v-card-text> 
                                        <v-card-text id = "subDataTextLight">Zero Media Value</v-card-text>
                                </v-card>
                            </v-layout>
                    </v-card>
                </v-flex>

                <v-flex d-flex xs12 md6 xl6>
                    <v-card dark>
                        <v-card-title id = "mainCardTitle"> Websites </v-card-title>

                            <v-card-text id = "mainDataNumber">113</v-card-text>
                            <v-card-text id = "subDataText">This Week's Daily Average</v-card-text>

                                <v-layout>
                                    <v-flex xs12>
                                        <v-card flat light id = "subCard" >
                                            <v-flex>
                                            <v-card-title id = "mainCardTitle">Crawler Stats</v-card-title>
                                                <v-card-text id = "dataNumber">100</v-card-text> 
                                                <v-card-text id = "subDataTextLight">Websites with Articles Today</v-card-text>
                                            </v-flex>
                                        </v-card>
                                    </v-flex>
                                </v-layout>

                                <v-layout>
                                    <v-flex>
                                        <v-card flat light id = "subCard">
                                            <v-layout>
                                            <v-card-text id = "dataNumber">100</v-card-text> 
                                            <v-card-text id = "subDataTextLight">Visited</v-card-text>

                                            <v-card-text id = "dataNumber">100</v-card-text> 
                                            <v-card-text id = "subDataTextLight">Not Visited</v-card-text>
                                            </v-layout>
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                                
                                <v-layout>
                                    <v-flex>
                                        <v-card flat light id = "subCard">
                                            <v-card-title id = "mainCardTitle">Stats</v-card-title>

                                                <v-card-text id = "dataNumber">1768</v-card-text> 
                                                <v-card-text id = "subDataTextLight">Metawhale Scraper</v-card-text>

                                                <v-card-text id = "dataNumber">10</v-card-text> 
                                                <v-card-text id = "subDataTextLight">MMI Scraper</v-card-text>

                                                <v-card-text id = "dataNumber">0</v-card-text>
                                                <v-card-text id = "subDataTextLight">No Plugin</v-card-text>

                                                <v-card-text id = "dataNumber">100</v-card-text>
                                                <v-card-text id = "subDataTextLight">No Pub ID</v-card-text>   
                                        </v-card>
                                    </v-flex>
                                </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>

        </div>

    </v-app>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style>
    #mainCardTitle {
        font-family: 'Roboto';
        font-size: 35px;
        font-weight: 300;
    }
    #mainDataNumber{
        font-family: 'Roboto';
        font-size: bold;
        font-size: 50px;
    }
    #dataNumber {
        font-family: 'Roboto';
        font-size: 50px;
        font-weight: bold;
        color: blue;
    }
    #subDataText {
        font-family: 15px;
    }
    #subDataTextLight {
        font-family: 15px;
        color: #000000;
    }
    #subCard {
        color: "#DCDDDE";
        margin: 2px;
    }
</style>

