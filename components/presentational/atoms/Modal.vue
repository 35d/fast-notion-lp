<template>
  <transition name="fade">
    <div v-if="props.shouldShowModal">
      <div class="modal-bg">
        <div v-on-clickaway="props.onClose" class="modal">
          <img
            src="@/assets/img/close-white.svg"
            alt="モーダルを閉じるボタン"
            class="modal__close-button-area close-button"
            @click="props.onClose"
          />
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { mixin as clickaway } from 'vue-clickaway'
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  mixins: [clickaway],
  props: {
    onClose: {
      type: Function,
      required: false,
      default: undefined
    },
    shouldShowModal: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    return { props }
  }
})
</script>

<style lang="scss" scoped>
.modal-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  width: 100vw;
  height: auto;
  background-color: rgba(#555, 0.5);
  backdrop-filter: blur(8px);
}

.modal {
  width: calc(100% - 32px);
  min-height: 320px;
  height: auto;
  background-color: #fff;
  padding: 24px 16px;

  &__ {
    &close-button-area {
      position: absolute;
      top: -24px;
      right: 16px;
    }
  }
}

.close-button {
  width: 12px;
  height: 12px;
  cursor: pointer;
}

.fade {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.3s ease-in-out;
  }

  &-enter {
    opacity: 0;
  }

  &-leave-to {
    opacity: 0;
  }
}
</style>
