<template>
    <v-app>
            <div>
                <v-responsive style = "
                background-color: orange;"
                id = "divLocationIndicator"
                vue-resize-text
                >

                Scraper Data & Infra Monitoring

                </v-responsive>
            </div>
        
    <!-- Local DB Queued -->
        <v-card
            dark
            class = "mx-auto"
            max-width= "344">

            <v-card-title>Local DB Queued</v-card-title>

                <v-card light>
                    <v-card-title>test</v-card-title>
                </v-card>

            <v-card-text>test</v-card-text>
        </v-card>

    <!-- Local DB Processing -->
        <v-card
            dark
            class = "mx-auto"
            max-width= "344">

            <v-card-title>Local DB Processing</v-card-title>

                <v-card light>
                    <v-card-title>test</v-card-title>
                </v-card>

            <v-card-text>test</v-card-text>
        </v-card>

    <!-- Local DB Max ID -->
        <v-card
            dark
            class = "mx-auto"
            max-width= "344">

            <v-card-title>Local DB Max ID</v-card-title>

                <v-card light>
                    <v-card-title>test</v-card-title>
                </v-card>

            <v-card-text>test</v-card-text>
        </v-card>

    <!-- Product DB Max ID -->
        <v-card
            dark
            class = "mx-auto"
            max-width= "344">

            <v-card-title>Product DB Max ID </v-card-title>

                <v-card light>
                    <v-card-title>test</v-card-title>
                </v-card>

            <v-card-text>test</v-card-text>
        </v-card>




    </v-app>
</template>

<script>
export default {
    name: 'Infrascraper'
}
</script>
