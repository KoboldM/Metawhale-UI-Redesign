<!-- 
    TODO: 
        1) Local/International table ( occupy only left side )
        2) Clicking on number under daily/weekly
            2.1) Shows articles from the website
        3) Paginations & Search functions
-->
<template>
    <v-app>
        <div>
            <v-responsive style = "
                background-color: orange;"
                id = "divLocationIndicator"
                vue-resize-text
            >

            Top Hits

            </v-responsive>
        </div>
    </v-app>
</template>

<script>
export default {
    name: 'Tophits'
}
</script>

<style>

</style>
