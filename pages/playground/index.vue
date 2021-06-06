<template>
  <div>
    <h1>Fast Notion Web (β)</h1>
    <ToDoSection />
    <Modal
      :should-show-modal="state.shouldShowSettingModal"
      :on-close="_onClickClose"
    >
      <SettingSection />
    </Modal>
    <form>
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
        <button @click.prevent="_onClickSubmitButton">POST</button>
        <p>{{ state.status }}</p>
      </div>
      <a @click.prevent="_onClickSettingButton">SETTING</a>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'
import SettingSection from '@/components/container/playground/SettingSection.vue'
import ToDoSection from '@/components/container/playground/ToDoSection.vue'
import { Modal } from '@/components/presentational/atoms'

const baseUrl = 'https://fast-notion.appspot.com/v1'
// const baseUrl = 'http://localhost:8080/v1'
export const addUrl = `${baseUrl}/w/add`
export const addDbUrl = `${baseUrl}/w/dbAdd`

interface PostForm {
  text: string
}

const STATUSES = ['', 'SENDING', 'SUCCESS', 'FAILED'] as const
export type Status = typeof STATUSES[number]

interface State {
  postForm: PostForm
  status: Status
  shouldShowSettingModal: boolean
}

export interface PostBody {
  key: string
  // eslint-disable-next-line
  token_v2: string
  // eslint-disable-next-line
  notion_url: string
  text: string
  type: string
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
      shouldShowSettingModal: false
    })

    const _onClickSubmitButton = () => {
      const url = window.localStorage.getItem('fast_notion_url')
      const token = window.localStorage.getItem('fast_notion_token')

      if (!url) return
      if (!token) return

      const data: PostBody = {
        key: 'NrcSQQ3PWMX3_sgdfFju',
        token_v2: token,
        notion_url: url,
        text: state.postForm.text,
        type: ''
      }

      state.status = 'SENDING'

      root.$axios
        .post(addUrl, data)
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

    const _onClickClose = () => {
      state.shouldShowSettingModal = false
    }

    return { state, _onClickSubmitButton, _onClickSettingButton, _onClickClose }
  }
})
</script>

<style lang="scss" scoped></style>
