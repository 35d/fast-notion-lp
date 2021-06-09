<template>
  <div class="">
    <form class="df fdc">
      <label class="mb16 db">
        <p class="label__text">TOKEN</p>
        <input
          v-model="state.settingForm.token"
          class="wf"
          type="text"
          placeholder="INPUT YOUR TOKEN"
        />
      </label>
      <label class="mb24">
        <p class="label__text">URL</p>
        <input
          v-model="state.settingForm.url"
          class="wf"
          type="text"
          placeholder="INPUT YOUR TOKEN"
        />
      </label>
      <div class="df jcc">
        <button @click.prevent="_onClickSubmitButton">SAVE</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  PropType,
  reactive
} from '@nuxtjs/composition-api'

interface SettingForm {
  url: string
  token: string
}

interface State {
  settingForm: SettingForm
}

export default defineComponent({
  props: {
    onClose: {
      type: Function as PropType<() => {}>,
      required: true
    }
  },
  setup(props) {
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
      props.onClose()
    }

    return { state, _onClickSubmitButton }
  }
})
</script>

<style lang="scss" scoped>
.label__text {
  font-size: 1.2rem;
}
</style>
