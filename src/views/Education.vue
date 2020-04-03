<template>
  <div class="education" style="width: 100%">
    <v-row justify="center">
      <h1 class="display-1 mb-12">Skills & Education</h1>
    </v-row>
    <v-row
      no-gutters
      justify="space-around"
      class="px-12"
      v-intersect="{ handler: onSkillsIntersect, options: { threshold: [0, 0.25, 0.5, 0.75, 1] }}">
      <v-slide-x-transition>
        <v-col
          v-show="areSkillsIntersecting"
          class="pa-12">
          <v-alert
            border="left"
            colored-border
            color="primary"
            elevation="2"
            v-for="(education, index) in educations"
            :key="index"
            :icon="education.type"
            prominent
          >
            <p class="subtitle-2">{{education.name}}</p>
            <p class="caption">{{education.description}}</p>
          </v-alert>
        </v-col>
      </v-slide-x-transition>
      <v-divider inset vertical/>
      <v-slide-x-reverse-transition>
        <v-col
          v-show="areSkillsIntersecting"
          class="pa-12">
          <v-row
            no-gutters
            justify="space-around">
            <v-col
              v-show="areSkillsIntersecting"
              cols="6"
              class="pa-3"
              :key="skill.name"
              v-for="skill in skills"
            >
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
      </v-slide-x-reverse-transition>
    </v-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    data: () => ({
        areSkillsIntersecting: true
    }),
    computed: mapState({
        skills: state => state.person.skills,
        educations: state => state.person.education
    }),
    methods: {
        onSkillsIntersect (entries) {
            this.areSkillsIntersecting = entries[0].isIntersecting
        }
    }
}
</script>
<style>
.skill-chart-text {
  white-space: pre-line;
}
</style>
