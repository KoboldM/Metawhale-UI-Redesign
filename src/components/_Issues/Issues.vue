<!-- 

    TODO:
        1) Add/Fix Plugin button & function
        2) Day Comparison table
        3) Article Issues & Section Issues Table
        4) Error Logs table

-->
<template>
    <v-app>
        <div>
            <v-responsive style = "
                background-color: orange;"
                id = "divLocationIndicator"
                vue-resize-text
            >

            Check Issues

            </v-responsive>
        </div>

        <div>
            <v-container>
                <v-layout>
                    <v-flex>
                        <v-btn
                        rounded
                        x-small
                        replace
                        ripple
                        class = "text-none"
                        id = "addFixPlugin"
                        >Add/Fix Plugin
                        </v-btn>
                    </v-flex>

                    <v-flex>
                        <v-card>
                            <v-toolbar flat>
                                <v-toolbar-title> Day Comparison </v-toolbar-title>
                            </v-toolbar>
                        </v-card>
                    </v-flex>

                    <v-flex>
                        <v-card>
                            <v-toolbar flat>
                                <v-toolbar-title>Issues Record</v-toolbar-title>
                            </v-toolbar>
                            <v-tabs>
                                <v-tab>Article Issues</v-tab>
                                <v-tab>Section Issues</v-tab>
                            </v-tabs>
                        </v-card>
                    </v-flex>

                    <v-flex>
                        <v-toolbar flat>
                            <v-toolbar-title>Error Logs</v-toolbar-title>
                        </v-toolbar>
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
    name: 'Issues'
}
</script>

<style>
    #addFixPlugin {
        font-weight: 300;
        font-size: 12px;
        color: white;
        background-color: #1AF906;
    }
</style>
