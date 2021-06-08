export interface MemoPostBody {
  key: string
  token_v2: string
  notion_url: string
  text: string
  type: string
}

export const buildMemoPostBody = (text: string) => {
  const url = window.localStorage.getItem('fast_notion_url')
  const token = window.localStorage.getItem('fast_notion_token')

  if (!url) return
  if (!token) return

  return {
    key: 'NrcSQQ3PWMX3_sgdfFju',
    token_v2: token,
    notion_url: url,
    text,
    type: ''
  }
}
