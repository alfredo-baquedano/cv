<template>
    <div style="width: 100%">
        <v-row justify="center">
        <h1 class="display-1 mb-12">Skills & Education</h1>
        </v-row>
        <v-row
            no-gutters
            justify="space-around"
            class="px-12">
            <v-col
                class="pa-12">
                <v-alert
                    class="mb-8 pl-2"
                    border="left"
                    colored-border
                    color="primary"
                    elevation="2"
                    v-for="(education, index) in educations"
                    :key="index"
                    data-aos="fade-right"
                    :data-aos-delay="index*100"
                    data-aos-anchor="#education-section"
                    >
                    <template slot="prepend">
                        <v-icon color="primary" class="ma-4" size="38">{{education.type}}</v-icon>
                    </template>
                    <p class="subtitle-2 mb-2">{{education.name}}</p>
                    <p class="font-italic body-2">{{education.description}}</p>
                </v-alert>
            </v-col>
            <v-divider inset vertical/>
            <v-col
                class="pa-12">
                <v-row
                    no-gutters
                    justify="space-around">
                    <v-col
                        cols="6"
                        class="pa-3"
                        :key="skill.name"
                        v-for="(skill, index) in skills"
                        data-aos="fade-left"
                        :data-aos-delay="index*100"
                        data-aos-anchor="#education-section">
                        <h3 class="subtitle">{{skill.name}}</h3>
                        <v-row class="pb-5" justify="start">
                        <v-col
                            cols="auto"
                            class="pa-5"
                            :key="knowlodge.name"
                            v-for="knowlodge in skill.knowledges"
                        >
                            <v-progress-circular
                            :rotate="360"
                            :size="80"
                            :width="5"
                            :value="knowlodge.value"
                            color="primary"
                            >
                            <span class="caption skill-chart-text">{{ knowlodge.name }}</span>
                            </v-progress-circular>
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
</style>
