<template>
  <div class="l-main">
    <div class="l-main__inner">
      <h1>Fast Notion Web (β)</h1>
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
      <ToDoSection />
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

interface PostForm {
  text: string
}

const STATUSES = ['', 'SENDING', 'SUCCESS', 'FAILED'] as const
export type Status = typeof STATUSES[number]

interface State {
  postForm: PostForm
  status: Status
  shouldShowSettingModal: boolean
  shouldShowToDoModal: boolean
}

export interface PostBody {
  key: string
  token_v2: string
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
      shouldShowSettingModal: false,
      shouldShowToDoModal: false
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
        .post(ADD_URL, data)
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
:root {
  --positionX: 20px;
  --positionXOpposite: -20px;
  --positionY: 20px;
  --positionYOpposite: -20px;
  --angle: 145deg;
  --blur: 60px;
  --textColor: #001f3f;
  --textColorOpposite: #e0e0e0;
  --baseColor: #e0e0e0;
  --darkColor: #bebebe;
  --lightColor: #ffffff;
  --firstGradientColor: #e0e0e0;
  --secondGradientColor: #e0e0e0;
  --size: 300px;
  --radius: 50px;
}

.l-main {
  background-color: #e0e0e0;
  min-height: 100vh;
  color: #001f3f;
  color: var(--textColor);
  font-family: Muli, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.l-footer {
  position: fixed;
  bottom: 32px;
  display: flex;
}

.button-a {
  height: 44px;
  line-height: 44px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  color: #001f3f;
  background-color: #f8f8ff;
  border-radius: 10px;
  border: 1px solid transparent;
  padding: 7px 15px;
  font-size: 16px;
  letter-spacing: 0.6px;
  margin: 0 auto;
  -webkit-transition: opacity 0.1s linear;
  transition: opacity 0.1s linear;
  cursor: pointer;

  &__ {
    &emoji {
      font-size: 0.9rem;
      margin-right: 0.3rem;
    }
  }
}

.card {
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  border-radius: 30px;
  text-align: left;
  border-radius: 16px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}
</style>
