<template>
  <v-app dark>
    <v-navigation-drawer permanent app>
      <v-layout column align-center>
        <v-btn @click="$vuetify.goTo('#about')">
          About me
        </v-btn>
        <v-btn @click="$vuetify.goTo('#education')">
          Education
        </v-btn>
        <v-btn @click="$vuetify.goTo('#experience')">
          Skills & Experience
        </v-btn>
        <v-btn @click="$vuetify.goTo('#projects')">
          Projects
        </v-btn>
        <v-btn @click="$vuetify.goTo('#references')">
          References
        </v-btn>
        <v-btn @click="$vuetify.goTo('#contact')">
          Contact
        </v-btn>
      </v-layout>
    </v-navigation-drawer>
    <v-content>
      <v-layout pa-5 id="about">
        <About/>
      </v-layout>
      <v-layout pa-5 id="education">
        <Education/>
      </v-layout>
      <v-layout pa-5 id="experience">
        <Experience/>
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
import Projects from '@/views/Projects'
import About from '@/views/About'
import Education from '@/views/Education'
import Experience from '@/views/Experience'
import References from '@/views/References'
import Contact from '@/views/Contact'

export default {
  name: 'App',
  components: {
    Projects,
    About,
    Education,
    Experience,
    References,
    Contact
  },
  data () {
    return {
      //
    }
  }
}
</script>
