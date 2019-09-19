<template>
  <div class="education" style="width: 100%">
    <h1 class="display-1">Skills & Education</h1>
    <v-row class="pa-12" justify="space-around">
      <v-col cols="5" class="ma-5">
      </v-col>
      <v-divider inset vertical class="ma-5"/>
      <v-col cols="5" class="ma-5">
        <v-row no-gutters justify="space-around">
          <v-col cols="6" class="pa-3" :key="skill.name" v-for="skill in skills">
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
                  <span class="caption">
                    {{ knowlodge.name }}
                  </span>
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
import { mapState } from 'vuex';

export default {
  computed: mapState({
    skills: state => state.person.skills,
  }),
};
</script>
