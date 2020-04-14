<template>
    <div class="justify-center">
        <v-row no-gutters justify="center">
            <h1 class="display-1 mb-12">Skills & Education</h1>
        </v-row>
        <v-row no-gutters justify="center">
            <v-col class="pa-0 education-section-width">
                <v-row
                    no-gutters
                    justify="center"
                    align="center">
                    <v-col
                        cols="12"
                        :md="true"
                        class="px-4 px-md-12">
                        <v-alert
                            class="my-8 pl-2"
                            border="left"
                            colored-border
                            color="primary"
                            elevation="2"
                            v-for="(education, index) in educations"
                            :key="index"
                            data-aos="fade-right"
                            :data-aos-delay="index*100"
                            data-aos-anchor="#education-section">
                            <template slot="prepend">
                                <v-icon color="primary" class="ma-4" size="38">{{education.type}}</v-icon>
                            </template>
                            <p class="subtitle-2 mb-2">{{education.name}}</p>
                            <p class="font-italic body-2">{{education.description}}</p>
                        </v-alert>
                    </v-col>
                    <v-divider v-if="$vuetify.breakpoint.mdAndUp" inset vertical/>
                    <v-col
                        cols="12"
                        :md="true"
                        class="px-4 px-md-12">
                        <v-row
                            no-gutters
                            justify="space-around">
                            <v-col
                                cols="5"
                                class="py-3"
                                :key="skill.name"
                                v-for="(skill, index) in skills"
                                data-aos="fade-left"
                                :data-aos-delay="index*100"
                                data-aos-anchor="#education-section">
                                <v-row no-gutters :justify="$vuetify.breakpoint.mdAndUp? 'start' : 'space-around'">
                                    <v-col cols="auto">
                                        <h3 class="subtitle">{{skill.name}}</h3>
                                        <v-progress-circular
                                            class="my-4 mr-md-4 mr-2"
                                            :key="knowlodge.name"
                                            v-for="knowlodge in skill.knowledges"
                                            :rotate="360"
                                            :size="$vuetify.breakpoint.smAndUp? 80 : 60"
                                            :width="5"
                                            :value="knowlodge.value"
                                            color="primary">
                                            <span class="caption skill-chart-text">{{ knowlodge.name }}</span>
                                        </v-progress-circular>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
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
        skills: state => state.person.skills,
        educations: state => state.person.education
    })
}
</script>
<style>
.skill-chart-text {
    white-space: pre-line;
}
.education-section-width {
    max-width: 1300px !important;
}
</style>
