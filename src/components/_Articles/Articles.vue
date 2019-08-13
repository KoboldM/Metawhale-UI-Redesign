<!-- 

    TODO:
        1) 3 buttons & functions
            1.1) All Articles 
            1.2) Search by URL
            1.3) Add Articles
        2) Table w/ tabs

-->
<template>
    <v-app>
        <div>
            <v-responsive style = "
                background-color: orange;"
                id = "divLocationIndicator"
                vue-resize-text
            >

            Articles Dashboard

            </v-responsive>
        </div>

        <div>
            <v-container>
                <v-layout>
                    <v-flex>
                        <v-btn
                        class = "text-none"
                        rounded
                        x-small
                        replace
                        ripple
                        >All Articles
                        </v-btn>
                    </v-flex>

                    <v-flex>
                        <v-btn
                        class = "text-none"
                        rounded
                        x-small
                        replace
                        ripple
                        >Search by URL
                        </v-btn>
                    </v-flex>

                    <v-flex>
                        <v-btn
                        class = "text-none"
                        rounded
                        x-small
                        replace
                        ripple
                        >Add Article
                        </v-btn>
                    </v-flex>

                    <v-flex>
                        <v-tabs>
                            <v-tab>Article Stats</v-tab>
                            <v-tab>With Articles Today</v-tab>
                            <v-tab>Zero Articles Today</v-tab>
                        </v-tabs>

                        <v-data-table>
                        </v-data-table>

                    </v-flex>

                </v-layout>
            </v-container>
        </div>

    </v-app>
</template>

<script>
export default {
    name: 'Articles'
}
</script>

<style>

</style>
