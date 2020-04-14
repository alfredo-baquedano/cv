<template>
    <div>
        <v-row no-gutters justify="center">
            <h1 class="display-1 mb-12">Experience</h1>
        </v-row>
        <v-row no-gutters justify="center">
            <v-col class="experience-section-width pa-md-5 pr-4">
                <v-timeline left :dense="$vuetify.breakpoint.smAndDown">
                    <v-timeline-item
                        v-for="(experience, index) in experiences"
                        :key="index"
                        :data-aos="(index % 2 === 0) ? 'fade-left' : 'fade-right'"
                        :data-aos-delay="index*150"
                        data-aos-anchor="#experience-section"
                        fill-dot
                        color="transparent"
                        large>
                        <template v-slot:icon>
                            <v-avatar tile>
                                <v-img contain :src="experience.company.logo"/>
                            </v-avatar>
                        </template>
                        <template v-slot:opposite v-if="$vuetify.breakpoint.mdAndUp">
                            <span class="headline font-weight-bold primary--text">
                            {{ experience.year }}
                            </span>
                        </template>
                        <v-card class="py-4">
                            <v-card-title class="mb-0">
                               <span class="headline font-weight-light primary--text pr-1">{{ experience.position }}</span>
                               <span v-if="$vuetify.breakpoint.smAndDown" class="title font-weight-light">/ {{ experience.year }}</span>
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
.v-timeline-item__dot {
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
}
.experience-section-width {
    max-width: 1200px !important;
}
</style>
