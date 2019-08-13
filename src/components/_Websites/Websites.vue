<!-- 
    TODO:
        1) Search Filters
            1.1) Status
            1.2) Cloudflare
            1.3) Category
            1.4) System
            1.5) Website Type
            1.6) Export Buttons (pdf/csv?)
                1.6.1) Export News
                1.6.2) Export Blogs
                1.6.3) Export All
        2) Article Timeline Table
            2.1) Domain List Button
                2.1.1) Domain Info Button
                2.1.2) Edit Button ( FQDN & Website Type)
            2.2) Edit Button
            
-->
<template>
    <v-app>
        <div>
            <v-responsive style = "
                background-color: orange;"
                id = "divLocationIndicator"
                vue-resize-text
            >

            Search Website & Domain

            </v-responsive>
        </div>
    </v-app>
</template>

<script>
export default {
    name: 'Websites'
}
</script>

<style>

</style>
