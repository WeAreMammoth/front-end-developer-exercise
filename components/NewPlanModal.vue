<template>
  <div class="modal-overlay" @click="close">
    <div class="price-modal">
      <div class="price-header">
        <h6>New Plan Selected</h6>
        <button class="close" :aria-label="close">x</button>
      </div>
      <div class="price-body">
        <p>
          You have chosen: <span>{{ planName }}</span>
        </p>
      </div>
      <div class="price-footer">
        <button class="close" :aria-label="close" @click="close">Cancel</button>
        <button class="accept" :aria-label="ok" @click="close">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    planName: String,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin column {
  display: flex;
  flex-direction: column;
}
@mixin row {
  display: flex;
  flex-direction: row;
}
@mixin button {
  color: var(--white);
  font-size: 1em;
  border-radius: 4px;
  border-style: none;
  padding: 0.4em 0.8em;
}
$border: var(--border);
.modal-overlay {
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--offblack);
  z-index: 40;
}

.price {
  $self: &;

    &-modal {
    @include column;
    background-color: var(--mainwhite);
    width: 80%;
    max-width: 480px;
    margin-top: 1.6em;
    border: var(--border);
    border-radius: 4px;
    #{ $self }-header {
      @include row;
      justify-content: space-between;
      align-items: center;
      padding: 1em 0.8em;
      h6 {
        margin-block-end: unset;
        font-size: 1.2em;
        font-weight: 700;
      }
      .close {
        color: var(--black);
        display: flex;
        align-self: flex-start;
        font-size: 1.2em;
        line-height: 1.2;
        padding: 0.2em;
        text-shadow: none;
      }
    }
    #{ $self }-body {
      @include row;
      padding: 1em 0.8em;
      border-top: $border;
      border-bottom: $border;
      span {
        font-weight: 700;
      }
    }
    #{ $self }-footer {
      @include row;
      justify-content: flex-end;
      padding: 0.8em 0.8em;
      gap: 0.6em;
      .close {
        @include button;
        font-weight: 400;
        background-color: var(--dark);
        border-color: var(--dark);
        text-shadow: none;
      }
      .accept {
        @include button;
        background-color: var(--lightblue);
        border-color: var(--lightblue);
        &:hover {
          background-color: var(--darkblue);
          border-color: var(--darkblue);
        }
      }
    }
  }
}
</style>
