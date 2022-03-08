<template>
  <b-container>
    <b-row class="my-5">
      <b-col role="navigation">
        <h1 class="header">Company Inc.</h1>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="pricing">Pricing</NuxtLink>
      </b-col>
      <b-col class="d-flex align-items-end justify-content-end">
        <DarkThemeToggle />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <Nuxt />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import "~/assets/css/styles.scss";

export default {
  name: "Default",
};
</script>

<style lang="scss" scoped>
@mixin fluid-type($min-vw, $max-vw, $min-value, $max-value) {
  $factor: 1 / ($max-vw - $min-vw) * ($max-value - $min-value);
  $calc-value: unquote(
    "#{ $min-value - ($min-vw * $factor) } + #{ 100vw * $factor }"
  );

  font-size: $min-value; // Fallback for older browsers
  font-size: clamp(
    #{if($min-value > $max-value, $max-value, $min-value)},
    #{$calc-value},
    #{if($min-value > $max-value, $min-value, $max-value)}
  );
}

.header {
  @include fluid-type(20rem, 90rem, 1.5rem, 2.5rem);
}
a {
  font-weight: 500;
  color: var(--lightblue);
  &.nuxt-link-active {
    font-weight: 500;
  }
  &.nuxt-link-exact-active {
    color: var(--darkblue);
    font-weight: 700;
  }
  &:hover {
    color: var(--darkblue);
  }
}
</style>
