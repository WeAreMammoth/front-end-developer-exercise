<template>
  <div class="d-flex flex-column align-items-end">
    <p class="theme">
      <span v-if="darkMode === true">Dark Theme</span>
      <span v-else>Light Theme</span>
    </p>
    <div class="theme-toggle">
      <input
        type="checkbox"
        class="theme-switch"
        v-model="darkMode"
      />
      <label for="theme-switch_label">
        <span v-if="darkMode === true"> light </span>
        <span v-else> dark </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  mounted() {
    // set 'app-background' class to body
    let bodyElement = document.body;
    bodyElement.classList.add("app-background");
    // check for active theme
    let htmlElement = document.documentElement;
    let theme = localStorage.getItem("theme");

    if (theme === "dark") {
      htmlElement.setAttribute("theme", "dark");
      this.darkMode = true;
    } else {
      htmlElement.setAttribute("theme", "light");
      this.darkMode = false;
    }
  },
  watch: {
    darkMode: function () {
      // add/remove class to/from html tag
      let htmlElement = document.documentElement;

      if (this.darkMode) {
        localStorage.setItem("theme", "dark");
        htmlElement.setAttribute("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
        htmlElement.setAttribute("theme", "light");
      }
    },
  },
};
</script>

<style lang="scss">
p, label {
    margin-block-end: unset;
}    

.theme-toggle {
    display: flex;
    justify-content: flex-end;
    gap: 0.4em;
    padding-top: 0.4em;
    .theme-switch {
        border: 2px;
        height: 1.2em;
        width: 1.2em;
        label {
            line-height: 1;
        }
    }
}
</style>
