<!-- 
    TODO: 
        1) Scaling image
        2) Fix v-container so it stays complete center
        3) Fix login authentications
        4) Remove login from router-view app
        5) Fix overall design
-->

<template>
    <v-app>
        <div>
            <Logo/>
        </div>

        <v-container> 
            <v-flex class = "text-md-center">
                <v-form>
                    <v-text-field
                    label = "Username"
                    type = "text"
                    outlined
                    rounded
                    color = "#5952a1"
                    :rules = "[rules.required]"
                    ></v-text-field>

                    <v-text-field
                    v-model: password
                    label = "Password"
                    outlined
                    rounded
                    color = "#5952a1"
                    :append-icon="visible ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                    :rules = "[rules.required]"
                    :type = "visible ? 'text' : 'password'"
                    @click:append = "visible = !visible"
                    ></v-text-field>

                    <v-flex class = "text-md-right">
                        <v-btn
                        class = "white--text"
                        depressed
                        color = "#5952a1"
                        rounded
                        >Login</v-btn>
                    </v-flex>

                </v-form>
            </v-flex>
        </v-container>

    </v-app>
</template>

<script>
import Logo from './Logo'

export default {
    name: 'Login',
    components: {
        Logo
    },
    data () {
        return {
            visible: false,
            password: 'Password',
            rules: {
                required: value => !!value || 'Required'
            }
        }
    }
}
</script>

<style>

</style>
