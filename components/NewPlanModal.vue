<template>
  <div class="modal-overlay" @click="close">
    <div class="price-modal">
      <div class="header">
        <h6>New Plan Selected</h6>
        <button class="close">x</button>
      </div>
      <div class="body">
        <p>You have chosen: <span>{{planName}}</span></p>
      </div>
      <div class="footer">
        <button class="close" @click="close">Cancel</button>
        <button class="accept" @click="close">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      planName: String
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
  color: #fff;
  font-size: 1em;
  border-radius: 4px;
  border-style: none;
  padding: 0.4em 0.8em;
}
$border: 1px solid rgba(0, 0, 0, 0.125);
.modal-overlay {
  position: fixed;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 40;
}

.price-modal {
  @include column;
  background-color: white;
  width: 80%;
  max-width: 480px;
  margin-top: 1.6em;
  border: $border;
  border-radius: 4px;
  .header {
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
      display: flex;
      align-self: flex-start;
      font-size: 1.2em;
      line-height: 1.2;
      padding: 0.2em;
    }
  }
  .body {
    @include row;
    padding: 1em 0.8em;
    border-top: $border;
    border-bottom: $border;
    span {
      font-weight: 700;
    }
  }
  .footer {
    @include row;
    justify-content: flex-end;
    padding: 0.8em 0.8em;
    gap: 0.6em;
    .close {
      @include button;
      font-weight: 400;
      background-color: #000;
      border-color: #000;
      text-shadow: none;
    }
    .accept {
      @include button;
      background-color: #007bff;
      border-color: #007bff;
      &:hover {
        background-color: #0063ce;
        border-color: #0063ce;
      }
    }
  }
}
</style>
