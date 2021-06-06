<template>
  <div>
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

interface SettingForm {
  url: string
  token: string
}

interface State {
  settingForm: SettingForm
}

export default defineComponent({
  setup() {
    const state = reactive<State>({
      settingForm: {
        url: '',
        token: ''
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

    const _onClickSubmitButton = () => {
      window.localStorage.setItem('fast_notion_token', state.settingForm.token)
      window.localStorage.setItem('fast_notion_url', state.settingForm.url)
    }

    return { state, _onClickSubmitButton }
  }
})
</script>

<style lang="scss" scoped>
.div {
  background-color: red;
}
</style>
