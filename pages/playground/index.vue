<template>
  <div class="l-main">
    <div class="l-main__inner">
      <h1 class="heading1">Fast Notion Web (β)</h1>
      <p class="tac">Quick memo for Notion</p>
      <Portal to="global-modal">
        <Modal
          :should-show-modal="state.shouldShowSettingModal"
          :on-close="_onClickClose"
        >
          <SettingSection />
        </Modal>
        <Modal
          :should-show-modal="state.shouldShowToDoModal"
          :on-close="_onClickToDoClose"
        >
          <ToDoSection />
        </Modal>
      </Portal>
      <form class="card">
        <label>
          <span>
            TEXT
          </span>
          <input
            v-model="state.postForm.text"
            type="text"
            placeholder="INPUT YOUR NOTE"
          />
        </label>
        <div>
          <button @click.prevent="_onClickSubmitButton">
            POST
          </button>
          <p>{{ state.status }}</p>
        </div>
      </form>
    </div>
    <div class="l-footer">
      <div>
        <button class="button-a" @click.prevent="_onClickSettingButton">
          <span class="button-a__emoji">🔧</span>
        </button>
        <button class="button-a" @click.prevent="_onClickToDoButton">
          <span class="button-a__emoji">🐈</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import SettingSection from '@/components/container/playground/SettingSection.vue'
import ToDoSection from '@/components/container/playground/ToDoSection.vue'
import { Modal } from '@/components/presentational/atoms'
import { ADD_URL } from '@/config'
import { buildMemoPostReqBody, MemoPostForm } from '@/models/memo'

const STATUSES = ['', 'SENDING', 'SUCCESS', 'FAILED'] as const
export type Status = typeof STATUSES[number]

interface State {
  postForm: MemoPostForm
  status: Status
  shouldShowSettingModal: boolean
  shouldShowToDoModal: boolean
}

export default defineComponent({
  components: {
    SettingSection,
    ToDoSection,
    Modal
  },
  setup(_props, { root }) {
    const state = reactive<State>({
      postForm: {
        text: ''
      },
      status: '',
      shouldShowSettingModal: false,
      shouldShowToDoModal: false
    })

    const _onClickSubmitButton = () => {
      state.status = 'SENDING'

      root.$axios
        .post(ADD_URL, buildMemoPostReqBody(state.postForm.text))
        .then(() => {
          state.status = 'SUCCESS'
          state.postForm.text = ''
        })
        .catch(() => {
          state.status = 'FAILED'
        })
        .finally(() => {
          setTimeout(() => {
            state.status = ''
          }, 1000)
        })
    }

    const _onClickSettingButton = () => {
      state.shouldShowSettingModal = true
    }

    const _onClickToDoButton = () => {
      state.shouldShowToDoModal = true
    }

    const _onClickClose = () => {
      state.shouldShowSettingModal = false
    }

    const _onClickToDoClose = () => {
      state.shouldShowToDoModal = false
    }

    return {
      state,
      _onClickSubmitButton,
      _onClickToDoButton,
      _onClickToDoClose,
      _onClickSettingButton,
      _onClickClose
    }
  }
})
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
