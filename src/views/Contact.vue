<template>
  <div class="contact" style="height: 600px">
    <v-row justify="center">
      <h1 class="display-1 mb-12">Contact</h1>
    </v-row>
    <v-row no-gutters justify="center" class="px-12 pb-12">
      <v-col cols="7" class="px-12">
        <v-card class="pa-5">
          <v-card-title>
            Message me
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="Name"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              label="Email"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              label="Company"
              dense
              outlined
            ></v-text-field>
            <v-text-field
              label="Subject"
              dense
              outlined
            ></v-text-field>
            <v-textarea
              label="Message"
              dense
              outlined
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-btn rounded color="primary">send message</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="5" class="px-12">
        <v-card>
          <v-card-title>
            Contact info
          </v-card-title>
          <v-card-text>
            <v-list dense color="transparent">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    Email
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Lorem ipsum
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-phone</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    Phone
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Lorem ipsum
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="primary">mdi-map-marker</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    Address
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Lorem ipsum
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
