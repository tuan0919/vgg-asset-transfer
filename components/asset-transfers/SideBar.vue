<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      emits: ["update:modelValue"],
    };
  },
};
</script>

<template>
  <v-navigation-drawer
    app
    color="blue-grey lighten-5"
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <div>This is drawer</div>
  </v-navigation-drawer>
</template>
