<template>
  <div>
    <v-row justify="center">
      <h1 class="display-1 mb-12">About</h1>
    </v-row>
    <v-row no-gutters class="px-12">
      <v-col class="px-12">
        <v-card>
          <v-card-title>
            Personal Profile
          </v-card-title>
          <v-card-text>
            {{ profileInfo }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="px-12">
        <v-card>
          <v-card-title>
            Basic Information
          </v-card-title>
          <v-card-text>
            <v-list dense color="transparent">
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon color="primary">mdi-account</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    Name
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ contactInfo.firstName + ' ' + contactInfo.lastName }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon color="primary">mdi-email</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    Email
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ contactInfo.email }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon color="primary">mdi-phone</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    Phone
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ contactInfo.phone }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon color="primary">mdi-calendar</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    Date of birth
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ contactInfo.dateOfBirth }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-avatar>
                  <v-icon color="primary">mdi-map-marker</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    Address
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ contactInfo.address }}
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
<script>
import { mapState } from 'vuex'

export default {
    computed: mapState({
        contactInfo: state => state.person.contactInfo,
        profileInfo: state => state.person.profileInfo
    })
}
</script>
