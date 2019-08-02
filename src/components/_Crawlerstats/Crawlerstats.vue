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

        <div>
            <p> media meter </p>
            <p> As of
            </p>
        </div>

    </v-app>
</template>

<script>
export default {
    name: 'Crawlerstats'
}
</script>
