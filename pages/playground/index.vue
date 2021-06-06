<template>
  <div>
    <div class="todo">
      <p>TODO リスト</p>
      <p>- [x] Composition API 導入</p>
      <p>
        - [ ] TODO トークンを入力してローカルストレージに保存できるようにする
      </p>
      <p>- [ ] TODO URL を入力してローカルストレージに保存できるようにする</p>
      <p>- [ ] API 接続して、投稿できるようにする</p>
      <p>{{ state }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

interface SettingForm {
  url: string
  token: string
}

interface State {
  settingForm: SettingForm
}

export default defineComponent({
  setup() {
    // // TODO hooks に切り出す
    const state = reactive<State>({
      settingForm: {
        url: '',
        token: ''
      }
    })

    return { state }
  }
})
</script>
