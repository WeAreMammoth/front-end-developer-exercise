<template>
  <b-container>
    <b-row class="my-5">
      <b-col>
        <h1>Company Inc.</h1>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="pricing">Pricing</NuxtLink>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Nuxt />
      </b-col>
    </b-row>
    <div class="toggle-wrap" @click="toggleDark">
        <div class="toggle">
            <div id="dark-mode" type="checkbox"></div>
        </div>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'Default',
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    toggleDark() {
      document.documentElement.classList.toggle('dark-mode');
      document.querySelector(".toggle-wrap").classList.toggle('dark-active');
    }
  }
};
</script>

<style lang="scss">
@mixin bp-medium {
  @media all and (min-width: 640px) {
    @content;
  }
}
@mixin bp-large {
  @media all and (min-width: 992px) {
    @content;
  }
}
h1 {
  font-size: 1.33rem;
  @include bp-medium {
    font-size: 2.5rem;
  }
}
.nuxt-link-exact-active {
  font-weight: bold;
}
.dark-ui {
  position: fixed;
  top: 1rem;
  right: 1.66rem;
  width: 100px;
  height: 40px;
  border-radius: 30px;
  background: rgba(black, .1);
}
</style>
