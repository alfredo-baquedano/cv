<template>
    <div>
        <v-row no-gutters justify="center">
            <h1 class="display-1 mb-12">Contact</h1>
        </v-row>
        <v-row no-gutters justify="center" class="px-md-12 px-4 pb-0 pb-md-12">
            <v-col
                cols="12"
                md="7"
                class="px-md-12"
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
                                :rules="rules.name"
                            ></v-text-field>
                            <v-text-field
                                v-model="message.email"
                                label="Email"
                                dense
                                outlined
                                :rules="rules.email"
                            ></v-text-field>
                            <v-text-field
                                v-model="message.company"
                                label="Company"
                                dense
                                outlined
                                :rules="rules.company"
                            ></v-text-field>
                            <v-text-field
                                v-model="message.subject"
                                label="Subject"
                                dense
                                outlined
                                :rules="rules.subject"
                            ></v-text-field>
                            <v-textarea
                                v-model="message.body"
                                label="Message"
                                dense
                                outlined
                                :rules="rules.body"
                            ></v-textarea>
                            <v-slide-y-reverse-transition>
                                <v-btn
                                    v-if="state === 'error'"
                                    class="disable-events"
                                    :key="state"
                                    rounded
                                    depressed
                                    color="error">
                                    <v-icon left small>mdi-close</v-icon> ERROR
                                </v-btn>
                                <v-btn
                                    v-else-if="state == 'success'"
                                    class="disable-events"
                                    :key="state"
                                    rounded
                                    depressed
                                    color="success">
                                    <v-icon left small>mdi-check</v-icon> MESSAGE SENDED
                                </v-btn>
                                <v-btn
                                    class="v-btn--contained"
                                    v-else
                                    :key="state"
                                    rounded
                                    depressed
                                    color="primary"
                                    @click="sendMessage"
                                    :loading="loading"
                                    :disabled="loading">
                                    SEND MESSAGE <v-icon right small>mdi-send</v-icon>
                                </v-btn>
                            </v-slide-y-reverse-transition>
                        </v-card-text>
                    </v-form>
                </v-card>
            </v-col>
            <v-col
                order="first"
                order-md="last"
                cols="12"
                md="5"
                class="px-md-12 pb-4 pb-md-0">
                <v-card
                    data-aos="fade-left"
                    data-aos-delay="100"
                    data-aos-anchor="#contact-section">
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
                                    <v-icon color="primary">mdi-calendar</v-icon>
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
            },
            rules: {
                name: [
                    v => !!v || 'Name is required',
                    v => v.length < 100 || 'Name must be less than 100 characters'
                ],
                email: [
                    v => !!v || 'E-mail is required',
                    v => v.length < 200 || 'E-mail must be less than 200 characters',
                    v => /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]){2,4}$/g.test(v) || 'E-mail must be valid'
                ],
                company: [
                    v => !!v || 'Company is required',
                    v => v.length < 200 || 'Company must be less than 200 characters'
                ],
                subject: [
                    v => !!v || 'Subject is required',
                    v => v.length < 200 || 'Subject must be less than 200 characters'
                ],
                body: [
                    v => !!v || 'Body is required',
                    v => v.length < 1000 || 'Body must be less than 1000 characters'
                ]
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
<style>
.disable-events {
    pointer-events: none
}
</style>
