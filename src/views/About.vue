<template>
    <div style="position: relative; height: 100vh">
        <div style="height: 100vh; background-color: gray">
            <v-img
                class="background-image"
                src="img/background3.jpg"
                gradient="to bottom, rgba(100,115,201,.33), rgba(25,32,72,.6)">
            </v-img>
        </div>
        <v-row no-gutters style="position: absolute; bottom: 100px" justify="center" align="center">
            <v-col cols="7">
                <v-row no-gutters align="center">
                    <v-col
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="500"
                        data-aos-anchor="#about-section">
                        <v-card dark color="transparent" elevation="0" style="text-align: right">
                            <v-card-text class="text-uppercase" style="font-size: 3rem">
                                <span :style="'color: '+this.$vuetify.theme.themes.light.primary">{{contactInfo.firstName}}</span>{{contactInfo.lastName}}
                            </v-card-text>
                            <v-card-text>
                                {{ profileInfo }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-divider dark vertical></v-divider>
                    <v-col
                        class="pa-0"
                        cols="5"
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="500"
                        data-aos-anchor="#about-section">
                        <v-card dark color="transparent" elevation="0" style="align-self: center">
                            <v-card-text class="pa-0">
                                <v-list dense color="transparent">
                                    <v-list-item>
                                        <v-list-item-avatar>
                                        <v-icon>mdi-email</v-icon>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                        <v-list-item-title>
                                            Email
                                        </v-list-item-title>
                                        <v-list-item-subtitle>
                                            {{ contactInfo.email }}
                                        </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-avatar>
                                        <v-icon>mdi-phone</v-icon>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                        <v-list-item-title>
                                            Phone
                                        </v-list-item-title>
                                        <v-list-item-subtitle>
                                            {{ contactInfo.phone }}
                                        </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-avatar>
                                        <v-icon>mdi-calendar</v-icon>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                        <v-list-item-title>
                                            Date of birth
                                        </v-list-item-title>
                                        <v-list-item-subtitle>
                                            {{ contactInfo.dateOfBirth }}
                                        </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-avatar>
                                        <v-icon>mdi-map-marker</v-icon>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                        <v-list-item-title>
                                            Address
                                        </v-list-item-title>
                                        <v-list-item-subtitle>
                                            {{ contactInfo.address }}
                                        </v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item class="px-7 pt-3">
                                        <v-btn rounded class="primary--text" style="align-self: center" color="white" @click="$emit('contact')">CONTACT</v-btn>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    computed: mapState({
        contactInfo: state => state.person.contactInfo,
        profileInfo: state => state.person.profileInfo
    })
}
</script>
<style>
 .background-image {
    filter: blur(3px) grayscale(40%);
    height: 100vh;
}
</style>
