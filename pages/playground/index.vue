<template>
  <div>
    <h1>Fast Notion Web (β)</h1>
    <div class="todo">
      <p>TODO リスト</p>
      <p>- [x] Composition API 導入</p>
      <p>
        - [x] TODO トークン・URL を入力できるようにする
      </p>

      <p>- [ ] API 接続して、投稿できるようにする</p>
      <p>- [ ] ストレージに保存できるようにする</p>
      <hr />
    </div>
    <form>
      <label>
        <span>
          TOKEN
        </span>
        <input
          v-model="state.settingForm.token"
          type="text"
          placeholder="INPUT YOUR TOKEN"
        />
      </label>
      <label>
        <span>
          URL
        </span>
        <input
          v-model="state.settingForm.url"
          type="text"
          placeholder="INPUT YOUR TOKEN"
        />
      </label>
    </form>
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
      <button @click.prevent="_onClickSubmitButton">POST</button>
    </form>
    {{ state }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

const baseUrl = 'https://fast-notion.appspot.com/v1'
export const addUrl = `${baseUrl}/add`
export const addDbUrl = `${baseUrl}/dbAdd`

interface SettingForm {
  url: string
  token: string
}

interface PostForm {
  text: string
}

interface State {
  settingForm: SettingForm
  postForm: PostForm
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
  setup(_props, { root }) {
    const state = reactive<State>({
      settingForm: {
        url: '',
        token: ''
      },
      postForm: {
        text: ''
      }
    })

    const _onClickSubmitButton = () => {
      const data: PostBody = {
        key: '5NGb6uKrbSW4Q6SMsJL8sYuBY4ZFPYD',
        token_v2: state.settingForm.token,
        notion_url: state.settingForm.url,
        text: state.postForm.text,
        type: ''
      }
      root.$axios.post(addUrl, data)

      alert('@')
    }

    return { state, _onClickSubmitButton }
  }
})
</script>
