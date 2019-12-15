<template>
  <v-app dark>
    <v-navigation-drawer class="navigation-drawer-gradint" color="primary" app>
      <v-row justify="center" no-gutters class="pt-5">
        <v-avatar class="my-4" size="96">
          <img
            :src="'img/alfredo.jpg'"
            alt="Alfredo">
        </v-avatar>
        <v-row justify="center" class="my-4">
          <span class="title white--text">Alfredo Baquedano</span><br/>
          <span class="subtitle white--text">Full-stack Developer</span>
        </v-row>
      </v-row>
      <v-list shaped dark dense class="pr-6">
        <v-list-item-group
          v-model="selectedSection"
          active-class="active-nav">
          <v-list-item
            class="my-3 py-1"
            v-for="(item, index) in sections"
            :key="index"
            @click="$vuetify.goTo(item.nav)">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
      selectedSection: undefined,
      sections: [
        {
          text: 'About',
          icon: 'mdi-account',
          nav: '#about',
        },
        {
          text: 'Experience',
          icon: 'mdi-briefcase',
          nav: '#experience',
        },
        {
          text: 'Skills & Education',
          icon: 'mdi-school',
          nav: '#education',
        },
        {
          text: 'Projects',
          icon: 'mdi-file-document-box-multiple',
          nav: '#projects',
        },
        {
          text: 'References',
          icon: 'mdi-format-quote-close',
          nav: '#references',
        },
        {
          text: 'Contact',
          icon: 'mdi-email',
          nav: '#contact',
        },
      ],
    };
  },
};
</script>
<style>
.active-nav {
    background-color: rgb(255, 255, 255) !important;
    color: var(--v-primary-base) !important;
    opacity: 1 !important;
}
/*
.navigation-drawer-gradint {
    background: linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71)
}
*/
</style>
