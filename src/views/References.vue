<template>
    <div
        style="overflow-x: auto">
        <v-row justify="center">
            <h1 class="display-1 mb-12">References</h1>
        </v-row>
        <v-row no-gutters class="px-md-12">
            <v-slide-group
                multiple
                show-arrows>
                <v-slide-item
                    class="mx-2 mx-md-10 my-1"
                    v-for="(reference, index) in references"
                    :key="index"
                    data-aos="fade-left"
                    :data-aos-delay="index*100"
                    data-aos-anchor="#references-section">
                    <v-card :width="$vuetify.breakpoint.mdAndUp? 500 : 250">
                        <v-row
                            class="pa-6 fill-height"
                            no-gutters>
                            <v-col cols="12" class="pa-0">
                                <v-icon class="mb-3" x-large color="primary">
                                    mdi-format-quote-close
                                </v-icon>
                                <p class="font-italic font-weight-light text-justify">
                                    {{ reference.text }}
                                </p>
                            </v-col>
                            <v-col cols="12" class="pa-0" align-self="end">
                                <p class="text-right mb-0">
                                    {{ reference.author.firstName }} {{ reference.author.lastName }}
                                </p>
                                <p class="mb-0 font-italic font-weight-light caption text-right">
                                    {{ reference.author.position }}
                                </p>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-row>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    computed: mapState({
        references: state => state.person.references
    })
}
</script>
