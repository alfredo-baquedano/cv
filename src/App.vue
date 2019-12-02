<template>
  <v-app dark>
    <v-navigation-drawer permanent app>
      <v-layout column align-center pa- 5>
        <v-flex py-5>
          <v-layout column align-center>
            <v-avatar class="my-5" size="96">
              <img
                :src="'img/alfredo.jpg'"
                alt="Alfredo">
            </v-avatar>
            <div class="title primary--text">Alfredo Baquedano</div>
            <span class="subtitle">Full-stack Developer</span>
          </v-layout>
        </v-flex>
        <v-flex py-5>
          <v-layout column align-center>
            <v-flex py-3>
              <v-btn
                text
                color="primary"
                @click="$vuetify.goTo('#about')">
                About me
              </v-btn>
            </v-flex>
            <v-flex py-3>
              <v-btn
                text
                color="primary"
                @click="$vuetify.goTo('#experience')">
                Experience
              </v-btn>
            </v-flex>
            <v-flex py-3>
              <v-btn
                text
                color="primary"
                @click="$vuetify.goTo('#education')">
                Skills & Edaucation
              </v-btn>
            </v-flex>
            <v-flex py-3>
              <v-btn
                text
                color="primary"
                @click="$vuetify.goTo('#projects')">
                Projects
              </v-btn>
            </v-flex>
            <v-flex py-3>
              <v-btn
                text
                color="primary"
                @click="$vuetify.goTo('#references')">
                References
              </v-btn>
            </v-flex>
            <v-flex py-3>
              <v-btn
                text
                color="primary"
                @click="$vuetify.goTo('#contact')">
                Contact
              </v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
    <v-content>
      <v-layout pa-5 id="about">
        <About/>
      </v-layout>
      <v-layout pa-5 id="experience">
        <Experience/>
      </v-layout>
      <v-layout pa-5 id="education">
        <Education/>
      </v-layout>
      <v-layout pa-5 id="projects">
        <Projects/>
      </v-layout>
      <v-layout pa-5 id="references">
        <References/>
      </v-layout>
      <v-layout pa-5 id="contact">
        <Contact/>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import Projects from '@/views/Projects.vue';
import About from '@/views/About.vue';
import Education from '@/views/Education.vue';
import Experience from '@/views/Experience.vue';
import References from '@/views/References.vue';
import Contact from '@/views/Contact.vue';

export default {
  name: 'App',
  components: {
    Projects,
    About,
    Education,
    Experience,
    References,
    Contact,
  },
  data() {
    return {
      //
    };
  },
};
</script>
