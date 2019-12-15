<template>
  <div
    class="reference"
    style="overflow-x: auto">
    <v-row justify="center">
      <h1 class="display-1 mb-12">References</h1>
    </v-row>
    <v-row no-gutters class="px-12">
      <v-slide-group
        multiple
        show-arrows>
        <v-slide-item
          class="mx-10 my-1"
          v-for="(reference, index) in references"
          :key="index"
          v-slot:default="{ active, toggle }"
        >
          <v-card
            class="pa-4"
            width="500">
            <v-card-text class="font-italic font-weight-light">
              <v-icon x-large color="primary">mdi-format-quote-close</v-icon>
              <br/>
              {{ reference.text }}
            </v-card-text>
            <v-card-text color="primary" class="font-italic font-weight-bold text-right">
              {{ reference.author.firstName }} {{ reference.author.lastName }}
              <v-avatar>
                <img :src="reference.author.image">
              </v-avatar>
            </v-card-text>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-row>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: mapState({
    references: state => state.person.references,
  }),
};
</script>
