<template>
    <div>
        <v-row justify="center">
            <h1 class="display-1 mb-12">Experience</h1>
        </v-row>
        <v-row justify="center">
            <v-col cols="9" class="pa-5">
            <v-timeline>
                <v-timeline-item
                v-for="(experience, index) in experiences"
                :key="index"
                :data-aos="(index % 2 === 0) ? 'fade-left' : 'fade-right'"
                :data-aos-delay="index*150"
                data-aos-anchor="#experience-section"
                :color="experience.company.color"
                small>
                <template v-slot:icon>
                    <v-avatar>
                        <img :src="experience.company.logo">
                    </v-avatar>
                </template>
                <template v-slot:opposite>
                    <span class="headline font-weight-bold primary--text">
                    {{ experience.year }}
                    </span>
                </template>
                <v-card class="py-4">
                    <v-card-title class="headline font-weight-light primary--text mb-0">
                        {{ experience.position }}
                    </v-card-title>
                    <v-card-text>
                        <ul class="pl-4" style="list-style-type: disc">
                            <li v-for="(duty, index) in experience.duties" :key="index">
                                {{ duty }}
                            </li>
                        </ul>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
            </v-timeline>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    computed: mapState({
        experiences: state => state.person.experiences
    })
}
</script>
<style>
/*
.theme--dark.v-timeline:before {
  background: var(--v-secondary-base) !important;
}
*/
</style>
