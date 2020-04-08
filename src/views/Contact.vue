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
                    <v-form ref="messageForm">
                        <v-card-title>
                            Message me
                        </v-card-title>
                        <v-card-text>
                            <v-text-field
                                v-model="message.name"
                                label="Name"
                                dense
                                outlined
                            ></v-text-field>
                            <v-text-field
                                v-model="message.email"
                                label="Email"
                                dense
                                outlined
                            ></v-text-field>
                            <v-text-field
                                v-model="message.company"
                                label="Company"
                                dense
                                outlined
                            ></v-text-field>
                            <v-text-field
                                v-model="message.subject"
                                label="Subject"
                                dense
                                outlined
                            ></v-text-field>
                            <v-textarea
                                v-model="message.body"
                                label="Message"
                                dense
                                outlined
                            ></v-textarea>
                                <v-btn
                                    class="v-btn--contained"
                                    :key="state"
                                    rounded
                                    depressed
                                    color="primary"
                                    @click="sendMessage"
                                    :loading="loading"
                                    :disabled="loading">
                                    SEND MESSAGE <v-icon right small>mdi-send</v-icon>
                                </v-btn>
                        </v-card-text>
                    </v-form>
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
    data () {
        return {
            loading: false,
            state: undefined,
            message: {
                name: '',
                email: '',
                company: '',
                subject: '',
                body: ''
            }
        }
    },
    computed: mapState({
        contactInfo: state => state.person.contactInfo
    }),
    methods: {
        sendMessage () {
            if (this.$refs.messageForm.validate()) {
                this.loading = true
                fetch('https://formspree.io/mdolzbko', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.message)
                }).then(response => {
                    this.loading = false
                    this.state = 'success'
                }).catch(() => {
                    this.loading = false
                    this.state = 'error'
                })
            }
        }
    }
}
</script>
