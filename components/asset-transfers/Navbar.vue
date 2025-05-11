<script>
import Navbar from "@/components/asset-transfers/Navbar.vue";
export default {
  data() {
    return {
      scrollThreshold: 260,
    };
  },
  props: {
    name: String,
    color: String,
  },
  emits: ["toggle-drawer"],
};
</script>

<template>
  <v-app-bar scroll-threshold="260" :color>
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="$emit('toggle-drawer')"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>{{ name }}</v-app-bar-title>
    <template v-slot:append>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>
