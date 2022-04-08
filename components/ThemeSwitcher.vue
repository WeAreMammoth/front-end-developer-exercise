<template>
  <b-button-group>
    <b-button variant="outline-primary" :pressed="currentTheme === 'light' ? true : false" @click="setTheme('light')">Light Theme</b-button>
    <b-button variant="outline-primary" :pressed="currentTheme === 'dark' ? true : false" @click="setTheme('dark')">Dark Theme</b-button>
  </b-button-group>
</template>

<script>
export default {
  name: 'ThemeSwitcher',
  props: {},
  data() {
    return {
      currentTheme: "light",
    };
  },
  methods: {
    setTheme(theme) {
      localStorage.setItem('preferred-theme', theme);
      this.currentTheme = theme;
      document.documentElement.dataset.theme = theme;
    },
    checkMediaPreference() {
      const preference = window.matchMedia('(prefers-color-scheme: light)').matches

      if (preference) {
          return 'light';
      } else {
          return 'dark';
      }
    },
    checkLocalStorage() {
      return localStorage.getItem('preferred-theme');
    },
  },
  mounted() {
    const presetTheme = this.checkLocalStorage() || this.checkMediaPreference();
    this.setTheme(presetTheme);
  },
};
</script>
