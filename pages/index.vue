<template>
  <div class="l-main">
    <div>
      <h1 class="heading1 tac">Fast Notion Web (β)</h1>
      <p class="fs16 tac mb32">Quick memo tool for Notion</p>
      <Portal to="global-modal">
        <Modal
          :should-show-modal="state.shouldShowSettingModal"
          :on-close="_onClickClose"
        >
          <SettingSection :on-close="_onClickClose" />
        </Modal>
        <Modal
          :should-show-modal="state.shouldShowToDoModal"
          :on-close="_onClickToDoClose"
        >
          <ToDoSection />
        </Modal>
      </Portal>
      <form class="card">
        <label class="mb16 df">
          <textarea
            v-model="state.postForm.text"
            type="text"
            placeholder="INPUT YOUR NOTE"
            class="input f1"
          />
        </label>
        <div class="df jcc">
          <button class="button" @click.prevent="_onClickSubmitButton">
            <span v-if="state.status">{{ state.status }}</span>
            <span v-else>POST</span>
          </button>
        </div>
      </form>
    </div>
    <div class="l-footer">
      <div class="df">
        <button class="button-a mr8" @click.prevent="_onClickSettingButton">
          <span class="button-a__emoji">🔧</span>
        </button>
        <button class="button-a mr8" @click.prevent="_onClickToDoButton">
          <span class="button-a__emoji">🐈</span>
        </button>
        <a
          href="https://apps.apple.com/jp/app/fast-notion/id1505194382"
          target="_blank"
          class=""
        >
          <img
            src="@/assets/img/app-store.svg"
            alt="APP STORE のリンク"
            class="mr8"
            height="44px"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=jp.fastNotion&hl=ja&gl=US"
          target="_blank"
          class=""
          v-if="false"
        >
          <img
            src="@/assets/img/google-play.png"
            alt="Google Play のリンク"
            class=""
            height="44px"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import SettingSection from '@/components/container/top/SettingSection.vue'
import ToDoSection from '@/components/container/top/ToDoSection.vue'
import { Modal } from '@/components/presentational/atoms'
import { ADD_DB_URL, ADD_URL } from '@/config'
import { buildMemoPostReqBody, MemoPostForm } from '@/models/memo'
import { getIsDbMode } from '~/models/setting'

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
      const isDbMode = getIsDbMode()
      const url = isDbMode ? ADD_DB_URL : ADD_URL

      root.$axios
        .post(url, buildMemoPostReqBody(state.postForm.text))
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
