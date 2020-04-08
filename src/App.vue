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
          mandatory
          :value="selectedSection"
          active-class="active-nav">
          <v-list-item
            class="my-3 py-1"
            v-for="(item) in sections"
            :key="item.id"
            :value="item.id"
            @click="navToSection(item.id)">
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
      <About v-intersect="{ handler: onIntersect, options: { threshold: [0, 0.25, 0.5, 0.75, 1] }}" class="pa-10" id="about-section"/>
      <Experience v-intersect="{ handler: onIntersect, options: { threshold: [0, 0.25, 0.5, 0.75, 1] }}" class="pa-10" id="experience-section"/>
      <Education v-intersect="{ handler: onIntersect, options: { threshold: [0, 0.25, 0.5, 0.75, 1] }}" class="pa-10" id="education-section"/>
      <Projects v-intersect="{ handler: onIntersect, options: { threshold: [0, 0.25, 0.5, 0.75, 1] }}" class="pa-10" id="projects-section"/>
      <References v-intersect="{ handler: onIntersect, options: { threshold: [0, 0.25, 0.5, 0.75, 1] }}" class="pa-10" id="references-section"/>
      <Contact v-intersect="{ handler: onIntersect, options: { threshold: [0, 0.25, 0.5, 0.75, 1] }}" class="pa-10" id="contact-section"/>
    </v-content>
  </v-app>
</template>

<script>
import Projects from '@/views/Projects.vue'
import About from '@/views/About.vue'
import Education from '@/views/Education.vue'
import Experience from '@/views/Experience.vue'
import References from '@/views/References.vue'
import Contact from '@/views/Contact.vue'

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
            selectedSection: undefined,
            sections: [
                {
                    id: 'about-section',
                    text: 'About',
                    icon: 'mdi-account',
                    intersectRatio: 0
                },
                {
                    id: 'experience-section',
                    text: 'Experience',
                    icon: 'mdi-briefcase',
                    intersectRatio: 0
                },
                {
                    id: 'education-section',
                    text: 'Skills & Education',
                    icon: 'mdi-school',
                    intersectRatio: 0
                },
                {
                    id: 'projects-section',
                    text: 'Projects',
                    icon: 'mdi-file-document-box-multiple',
                    intersectRatio: 0
                },
                {
                    id: 'references-section',
                    text: 'References',
                    icon: 'mdi-format-quote-close',
                    intersectRatio: 0
                },
                {
                    id: 'contact-section',
                    text: 'Contact',
                    icon: 'mdi-email',
                    intersectRatio: 0
                }
            ],
            navActions: [],
            navActionsFinished: []
        }
    },
    computed: {
        disableIntersection: () => {
            return this.navActions.length === this.navActionsFinished
        }
    },
    methods: {
        onIntersect (entries, observer, isIntersecting) {
            entries.forEach((entrie) => {
                this.sections.find(section => section.id === entrie.target.id).intersectRatio = entrie.intersectionRatio
            })
            if (!this.disableIntersection) {
                const sectionsSortedByIntersectRatio = [...this.sections].sort((sectionA, sectionB) => sectionB.intersectRatio - sectionA.intersectRatio)
                this.selectedSection = sectionsSortedByIntersectRatio[0].id
            }
        },
        navToSection (id) {
            this.disableIntersection = true
            this.navActions.push(this.$vuetify.goTo(`#${id}`)).then(() => {
                this.navActionsFinished.push(true)
            })
        }
    }
}
</script>
<style>
.active-nav {
    background-color: rgb(255, 255, 255) !important;
    color: var(--v-primary-base) !important;
}
.theme--dark.v-list-item--active:before {
    opacity: 0 !important;
}
/*
.navigation-drawer-gradint {
    background: linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71)
}
*/
</style>
