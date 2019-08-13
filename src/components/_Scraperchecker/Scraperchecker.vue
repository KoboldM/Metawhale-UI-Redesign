<!-- 
    TODO:
        1) Input text field w/ search button & function
        2) Searched URL info
            2.1) Carousel
            2.2) Dates
            2.3) Section & Author
            2.4) Original Source button
        3) Article Content
            3.1) HTML version & text version
            3.2) Copy function
        4) Media Content
            4.1) Copy function
-->
<template>
    <v-app>
        <div>
            <v-responsive style = "
                background-color: orange;"
                id = "divLocationIndicator"
                vue-resize-text
            >
            Scraper Checker
            </v-responsive>
        </div>
    </v-app>
</template>

<script>
export default {
    name: 'Scraperchecker'
}
</script>

<style>

</style>
