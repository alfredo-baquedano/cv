<template>
  <v-app dark>
    <v-navigation-drawer class="navigation-drawer-gradint" color="primary" app>
      <v-row justify="center" no-gutters class="pa-5">
        <v-avatar class="my-4" size="96">
          <img
            :src="'img/alfredo.jpg'"
            alt="Alfredo">
        </v-avatar>
        <v-row justify="center" class="my-4">
          <span class="title white--text">Alfredo Baquedano</span><br/>
          <span class="subtitle white--text">Full-stack Developer</span>
        </v-row>
        <v-btn
          class="my-4"
          text
          color="white"
          @click="$vuetify.goTo('#about')">
          About me
        </v-btn>
        <v-btn
          class="my-4"
          text
          color="white"
          @click="$vuetify.goTo('#experience')">
          Experience
        </v-btn>
        <v-btn
          class="my-4"
          text
          color="white"
          @click="$vuetify.goTo('#education')">
          Skills & Edaucation
        </v-btn>
        <v-btn
          class="my-4"
          text
          color="white"
          @click="$vuetify.goTo('#projects')">
          Projects
        </v-btn>
        <v-btn
          class="my-4"
          text
          color="white"
          @click="$vuetify.goTo('#references')">
          References
        </v-btn>
        <v-btn
          class="my-4"
          text
          color="white"
          @click="$vuetify.goTo('#contact')">
          Contact
        </v-btn>
      </v-row>
    </v-navigation-drawer>
    <v-content>
      <v-img
        style="height: 100vh"
        src="img/background2.jpg"
        gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
      </v-img>
      <About class="pa-10" id="about"/>
      <Experience class="pa-10" id="experience"/>
      <Education class="pa-10" id="education"/>
      <Projects class="pa-10" id="projects"/>
      <References class="pa-10" id="references"/>
      <Contact class="pa-10" id="contact"/>
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
<style>
/*
.navigation-drawer-gradint {
    background: linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71)
}
*/
</style>
