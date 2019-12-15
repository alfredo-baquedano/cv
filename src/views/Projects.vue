<template>
  <div class="projects">
    <v-row justify="center">
      <h1 class="display-1 mb-12">Projects</h1>
    </v-row>
    <v-row no-gutters class="px-12">
      <v-carousel
        cycle
        height="600"
        hide-delimiter-background
        show-arrows-on-hover>
        <v-carousel-item
          v-for="(i) in 5"
          :key="i">
          <v-row>
            <v-col>
              <v-list>
                
              </v-list>
            </v-col>
            <v-col>
              <v-img></v-img>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-row>
  </div>
</template>
