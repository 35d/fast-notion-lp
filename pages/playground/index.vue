<template>
  <div>
    <h1>Fast Notion Web (β)</h1>
    <div class="todo">
      <p>TODO リスト</p>
      <p>- [x] Composition API 導入</p>
      <p>
        - [x] TODO トークン・URL を入力できるようにする
      </p>

      <p>- [x] API 接続して、投稿できるようにする</p>
      <p>- [x] ストレージに保存できるようにする</p>
      <p>- [ ] データベースモード対応</p>
      <p>- [ ] リファクタ</p>
      <p>- [ ] スタイルを当てる</p>
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
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  watch
} from '@nuxtjs/composition-api'

const baseUrl = 'https://fast-notion.appspot.com/v1'
// const baseUrl = 'http://localhost:8080/v1'
export const addUrl = `${baseUrl}/w/add`
export const addDbUrl = `${baseUrl}/w/dbAdd`

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

    onMounted(() => {
      retrive()
    })

    const retrive = () => {
      const url = window.localStorage.getItem('fast_notion_url')
      const token = window.localStorage.getItem('fast_notion_token')

      if (url) state.settingForm.url = url
      if (token) state.settingForm.token = token
    }

    watch(
      () => state.settingForm.url,
      (url: string) => {
        window.localStorage.setItem('fast_notion_url', url)
      }
    )

    watch(
      () => state.settingForm.token,
      (token: string) => {
        window.localStorage.setItem('fast_notion_token', token)
      }
    )

    const _onClickSubmitButton = () => {
      const data: PostBody = {
        key: 'NrcSQQ3PWMX3_sgdfFju',
        token_v2: state.settingForm.token,
        notion_url: state.settingForm.url,
        text: state.postForm.text,
        type: ''
      }

      root.$axios.post(addUrl, data)
    }

    return { state, _onClickSubmitButton }
  }
})
</script>
