<template>
  <div :class="[show ? 'pricing_modal__shown' : '', 'pricing_modal']">
    <div class="pricing_modal__dialog"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <header :class="[pricing.cost >= 29 ? 'pricing_modal__header--blue' : '' ,'pricing_modal__header']">
        New Plan Selected
        <button
          type="button"
          role="button"
          @click="closeModal"
          aria-label="Close modal"
        >
          &times;
        </button>
      </header>

      <section class="pricing_modal__body">
        You have chosen: <strong>{{pricing.name}}</strong>
      </section>

      <footer class="pricing_modal__footer">
        <button
          type="button"
          class="btn btn-secondary"
          @click="closeModal"
          aria-label="Close modal"
        >
          Cancel
        </button>
        <button
          type="button"
          class="btn btn-primary"
          @click="closeModal"
          aria-label="Confirm"
        >
          Ok
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PricingModal',
    props: {
        pricing: Object,
        show: Boolean
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
}
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';

.pricing_modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: transparentize($black, .5);
  &__shown {
    display: flex;
  }
  &__dialog {
    width: 90%;
    background-color: $white;
    border-radius: .5rem;
    box-shadow: 0 0 10px 1px lighten($black, 30);
  }
  &__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 1rem 1rem 1.2rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: .5rem .5rem 0 0;
    border-bottom: 1px solid $grey;
    button {
      background-color: transparent;
      border: none;
      outline: 0;
      padding: 0;
      font-size: 2rem;
      line-height: 1;
    }
    &--blue {
      background-color: $blue;
      color: $white;
      button {
        color: $white;
      }
    }
  }
  &__body {
    padding: 2rem 1rem;
    display: flex;
    justify-content: flex-start;
  }
  &__footer {
    padding: .5rem;
    display: flex;
    align-content: center;
    justify-content: flex-end;
    background-color: darken($white, 10);
    border-radius: 0 0 .5rem .5rem;
    button {
      margin-left: 0.5rem;
    }
  }
}

@media screen and (min-width: 768px) {
  .pricing_modal {
    &__dialog {
      max-width: 400px;
    }
  }
}

.dark_theme {
  .pricing_modal {
    background-color: transparentize($black, .1);
    &__dialog {
      background-color: lighten($black, 30);
      box-shadow: 0 0 10px 1px lighten($black, 20);
    }
    &__header {
      border-bottom: 1px solid lighten($black, 40);
      button {
        color: $white;
      }
    }
    &__footer {
      background-color: lighten($black, 25);
    }
  }
}
</style>