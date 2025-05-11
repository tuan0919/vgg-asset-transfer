<script>
import Navbar from "@/components/asset-transfers/Navbar.vue";
import AssetTable from "@/components/asset-transfers/Table.vue";
import SideBar from "~/components/asset-transfers/SideBar.vue";
export default {
  components: {
    Navbar,
    AssetTable,
    SideBar,
  },
  data() {
    return {
      openDrawer: false,
    };
  },
};
</script>

<template>
  <navbar
    name="This is my navbar"
    color="rgba(223,13,50)"
    @toggle-drawer="openDrawer = !openDrawer"
  />
  <v-main>
    <v-container class="mt-2">
      <v-row>
        <v-col cols="12">
          <asset-table />
        </v-col>
      </v-row>
    </v-container>
    <client-only>
      <side-bar v-model="openDrawer" />
    </client-only>
  </v-main>
</template>
