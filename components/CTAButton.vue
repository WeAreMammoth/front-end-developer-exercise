<template>
  <button :class="buttonClasses">{{ label }}</button>
</template>

<script>
export default {
  name: 'CTAButton',
  props: {
    label: {
      default: 'Label',
      type: String,
    },
    buttonStyle: {
      default: 'primary',
      type: String,
      validator: value => {
        console.log('button style is', value);
        return ['primary', 'secondary'].includes(value);
      },
    }
  },
  computed: {
    buttonClasses() {
      return `button button--${this.buttonStyle}`
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  border: $border__shape $color__blue;
  border-radius: $border__radius;
  padding: 0.5rem;

  &--primary {
    background-color: $color__blue;
    color: $color__white;
  }

  &--secondary {
    background-color: $color__white;
    color: $color__blue;
  }
}
</style>
