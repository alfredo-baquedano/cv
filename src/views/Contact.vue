<template>
  <div class="contact" style="height: 600px">
    <v-row justify="center">
      <h1 class="display-1 mb-12">Contact</h1>
    </v-row>
    <v-row justify="center">
      <v-col cols="7">
        <v-text-field
          prepend-icon="mdi-account"
          label="Name"
          dense
          solo
        ></v-text-field>
        <v-text-field
          prepend-icon="mdi-at"
          label="Email"
          dense
          solo
        ></v-text-field>
        <v-text-field
          prepend-icon="mdi-domain"
          label="Company"
          dense
          solo
        ></v-text-field>
        <v-text-field
          prepend-icon="mdi-comment"
          label="Subject"
          dense
          solo
        ></v-text-field>
        <v-textarea
          prepend-icon="mdi-comment-text"
          label="Message"
          dense
          solo
        ></v-textarea>
      </v-col>
    </v-row>
  </div>
</template>
