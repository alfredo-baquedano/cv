<template>
    <div>
        <v-row justify="center">
            <h1 class="display-1 mb-12">Contact</h1>
        </v-row>
        <v-row no-gutters justify="center" class="px-12 pb-12">
            <v-col
                cols="7"
                class="px-12"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-anchor="#contact-section">
                <v-card class="pa-5">
                    <v-card-title>
                        Message me
                    </v-card-title>
                    <v-card-text>
                        <v-text-field
                            label="Name"
                            dense
                            outlined
                        ></v-text-field>
                        <v-text-field
                            label="Email"
                            dense
                            outlined
                        ></v-text-field>
                        <v-text-field
                            label="Company"
                            dense
                            outlined
                        ></v-text-field>
                        <v-text-field
                            label="Subject"
                            dense
                        outlined
                        ></v-text-field>
                        <v-textarea
                            label="Message"
                            dense
                        outlined
                        ></v-textarea>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn rounded color="primary">send message</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="5" class="px-12">
                <v-card
                    data-aos="fade-left"
                    data-aos-delay="100"
                    data-aos-anchor="#contact-section">
                <v-card-title>
                    Contact info
                </v-card-title>
                    <v-card-text>
                        <v-list dense color="transparent">
                        <v-list-item>
                            <v-list-item-avatar>
                            <v-icon color="primary">mdi-email</v-icon>
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
                            <v-icon color="primary">mdi-phone</v-icon>
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
                            <v-icon color="primary">mdi-map-marker</v-icon>
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
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    computed: mapState({
        contactInfo: state => state.person.contactInfo
    })
}
</script>
