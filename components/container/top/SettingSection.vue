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
      <label class="mb8">
        <p class="label__text">URL</p>
        <div class="df">
          <input
            v-model="state.settingForm.url"
            class="wf"
            type="text"
            placeholder="INPUT YOUR TOKEN"
          />
        </div>
      </label>
      <label class="mb24 df">
        <p class="label__text lh40 mr4">DB Mode</p>
        <input v-model="state.settingForm.isDbMode" type="checkbox" />
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
import { getIsDbMode } from '~/models/setting'

interface SettingForm {
  url: string
  token: string
  isDbMode: boolean
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
        token: '',
        isDbMode: false
      }
    })

    onMounted(() => {
      retrive()
    })

    const retrive = () => {
      const url = window.localStorage.getItem('fast_notion_url')
      const token = window.localStorage.getItem('fast_notion_token')
      const isDbMode = getIsDbMode()

      if (url) state.settingForm.url = url
      if (token) state.settingForm.token = token
      if (isDbMode) state.settingForm.isDbMode = isDbMode
    }

    const _onClickSubmitButton = () => {
      window.localStorage.setItem('fast_notion_token', state.settingForm.token)
      window.localStorage.setItem('fast_notion_url', state.settingForm.url)
      window.localStorage.setItem(
        'fast_notion_is_db_mode',
        String(state.settingForm.isDbMode)
      )
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
