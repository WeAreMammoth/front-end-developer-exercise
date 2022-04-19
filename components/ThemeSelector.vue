<template>
  <b-form-select
    v-model="selected"
    :options="options"
    v-on:change="setTheme"
    class="themeSelector"
  />
</template>

<script>
export default {
  data() {
    return {
      //selected: "light",
      options: [
        { value: "light", text: "Light Theme" },
        { value: "dark", text: "Dark Theme" },
      ],
    };
  },
  computed: {
    selected() {
      return this.$store.state.theme;
    },
  },
  methods: {
    setTheme(theme) {
      this.$store.commit("setTheme", theme);
    },
  },
};
</script>
