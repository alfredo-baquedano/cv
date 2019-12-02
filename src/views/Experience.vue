<template>
  <div class="experience">
    <h1>Experience</h1>
    <v-layout>
      <v-flex md9 mx-auto pa-5>
        <v-timeline>
          <v-timeline-item
            v-for="(experience, i) in experiences"
            :key="i"
            :color="experience.company.color"
            small
          >
            <template v-slot:icon>
              <v-avatar>
                <img :src="experience.company.logo">
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold primary--text`">
                {{experience.year}}
              </span>
            </template>
            <v-card class="py-4">
              <v-card-title
                :class="`headline font-weight-light mb-4 primary--text`">
                {{experience.position}}
              </v-card-title>
              <v-card-text>
                {{experience.description}}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    experiences: state => state.person.experiences,
  }),
};
</script>
<style>
/*
.theme--dark.v-timeline:before {
  background: var(--v-secondary-base) !important;
}
*/
</style>
