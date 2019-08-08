<template>
    <v-app>
        <div>
            <v-responsive style = "
                background-color: orange;"
                id = "divLocationIndicator"
                vue-resize-text
            >

            Settings

            </v-responsive>
        </div>

        <v-layout align-start justify-center>
                <v-card>
                    <v-card-title> User Details </v-card-title>
                    <v-card-text id = "vCardText"> Username: loremipsum@media-meter.com</v-card-text>
                    <v-card-text id = "vCardText"> Name: Lorem Ipsum</v-card-text>

                    <v-card-actions id = "vCardAction">Change Password</v-card-actions>
                </v-card>



        </v-layout>

    <v-card elevation>
        <v-toolbar flat>
            <v-toolbar-title id = "toolBarTitle"> API Keys </v-toolbar-title>
        </v-toolbar>

        <v-data-table
            :headers = "headersApiKeys"
            :items-per-page="10"
            :items = "itemsApiKeys"
            class="elevation-1"
        >
        </v-data-table>
    </v-card>
    <br/>

    <v-card elevation>
        <v-toolbar flat>
            <v-toolbar-title id = "toolBarTitle"> View Users </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn 
            id = "addUserButton"
            depressed
            rounded
            x-small
            replace
            ripple
            class = "text-none"
            >Add User</v-btn>
        </v-toolbar>

        <v-data-table
            :headers = "headersViewUsers"
            :items-per-page="10"
            :items = "itemsViewUsers"
            class = "elevation-1"
        >
        </v-data-table>
    </v-card>

    </v-app>
</template>

<script>
export default {
    name: 'Settings',
    data() {
        return {
            headersApiKeys: [
                { text: 'Keys', align: 'left', sortable: false, value: 'keys'},
                { text: 'User', value: 'user'},
                { text: 'Access', value: 'access'},
                { text: 'Date Created', value: 'dateCreated'},
                { text: 'Last Access', value: 'lastAccess'},
                { text: 'Hits', value: 'hits'},
                { text: 'Status', value: 'status'}
            ],
            itemsApiKeys: [
                {keys: 'The', user: 'items', access: 'here should', dateCreated: 'be retrieved', lastAccess: 'from', hits: 'endpoint', status: 'test'},
            ],
            headersViewUsers: [
                { text: 'Name', align: 'left', value: 'name'},
                { text: 'Username', value: 'username'},
                { text: 'User Type', value: 'userType'}
            ],
            itemsViewUsers: [
                { name: 'same', username: 'here', userType: 'add loaders to table + lazy load(?)'}
            ]
        }
    },
}
</script>

<style>
    #vCardAction {
        color: #5952a1;
        font-style: 'Roboto';
        font-weight: 400;
    }
    #vCardText {
        font-style: 'Roboto';
        font-weight: 500;
        color: black;
    }
    #toolBarTitle {
        color: #5952a1;
        font-weight: 300;
    }
    #addUserButton {
        font-weight: 300;
        font-size: 12px;
        color: white;
        background-color: #1AF906;
    };
</style>
