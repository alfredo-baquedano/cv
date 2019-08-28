<template>
  <div class="education" style="width: 100%">
    <h1 class="display-1">Skills & Education</h1>
    <v-row class="pa-12" justify="space-around">
      <v-col cols="6">
      </v-col>
      <v-divider inset vertical/>
      <v-col cols="5">
        <h3 class="headline">Front-End WEB</h3>
        <v-row class="pa-5" justify="start">
          <v-col cols="auto" class="pa-5">
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="10"
              :value="76"
              color="primary"
            >
              Vue.js
            </v-progress-circular>
          </v-col>
          <v-col cols="auto" class="pa-5">
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="10"
              :value="65"
              color="primary"
            >
              React.js
            </v-progress-circular>
          </v-col>
        </v-row>
        <h3 class="headline">Front-End Mobile</h3>
        <v-row class="pa-5" justify="start">
          <v-col cols="auto" class="pa-5">
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="10"
              :value="76"
              color="primary"
            >
              React<br/>Native
            </v-progress-circular>
          </v-col>
          <v-col cols="auto" class="pa-5">
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="10"
              :value="65"
              color="primary"
            >
              Java
            </v-progress-circular>
          </v-col>
        </v-row>
        <h3 class="headline">BackEnd-End</h3>
        <v-row class="pa-5" justify="start">
          <v-col cols="auto" class="pa-5">
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="10"
              :value="76"
              color="primary"
            >
              Lumen
            </v-progress-circular>
          </v-col>
          <v-col cols="auto" class="pa-5">
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="10"
              :value="65"
              color="primary"
            >
              Express.js
            </v-progress-circular>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
