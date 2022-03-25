<template>
  <div>
    <b-form-checkbox v-model="checked" name="check-button" switch size="lg"
        @change="toggleTheme"
        role="button"
        aria-label="Toggle dark or light theme"
    >
    </b-form-checkbox>
  </div>
</template>

<script>
  export default {
    name: 'ThemeSwitch',
    data() {
      return {
        checked: false
      }
    },
    methods: {
        toggleTheme() {
            const bodyElement = document.querySelector('body');
            this.checked? bodyElement.classList.add('dark_theme') : bodyElement.classList.remove('dark_theme')
        }
    }
  }
</script>