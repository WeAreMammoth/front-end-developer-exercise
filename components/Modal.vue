<template>
  <Transition>
    <div class="planModal">
      <div class="planModal_container">
        <div class="planModal_header">
          <slot><h4>New Plan Selected</h4></slot>
        </div>

        <div class="planModal_body">
          <slot><p>You have chosen: <b>{{ getPlanName }}</b></p></slot>
        </div>

        <div class="planModal_footer">
          <slot>
            <button class="planModal_button planModal_button-cancel"  type="button" @click="close">Cancel</button>
            <button class="planModal_button planModal_button-ok" type="button" @click="close">OK</button>
          </slot>
        </div>

      </div>
    </div>
  </Transition>
</template>

<script>
  import store from '../store';

  export default {
    name: 'Modal',
    store,
    computed:{
      getPlanName(){ return this.$store.getters.planName }
    },
    methods: {
      close() {
        console.log(`${this}`)
        this.$emit('close');
      },
    },
  };
</script>

<style lang="scss">
  @import '../pages/global';

  .planModal {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .planModal_container {
    width: 500px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.3s ease;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
  }

  .planModal_header, .planModal_body, .planModal_footer {
    padding: 15px;
  }

  .planModal_header {
    margin-top: 0;
    border-bottom: $border-gray 1px solid;
  }

  .planModal_body {
    border-bottom: $border-gray 1px solid;
  }

  .planModal_footer {
    float: right;
  
  .planModal_button {
    border-radius: 5px;
    padding: 10px 15px;
    color: white;
    box-shadow: none;

    &-cancel {
      border: $darkgray 2px solid;
      background-color: $darkgray;
    }

    &-ok {
       border: $blue 2px solid;
      background-color: $blue;
    }
   }
  }
</style>