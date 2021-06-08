import { getToken, getUrl } from './setting'

export interface MemoPostBody {
  key: string
  token_v2: string
  notion_url: string
  text: string
  type: string
}

/**
 * メモを投稿するフォームの型定義
 */
export interface MemoPostForm {
  text: string
}

/**
 * メモを投稿用のリクエストボディの組み立て
 */
export const buildMemoPostReqBody = (text: string) => {
  const url = getUrl()
  const token = getToken()

  if (!url) {
    alert('Please set url')
    return
  }

  if (!token) {
    alert('Please set token')
    return
  }

  return {
    key: 'NrcSQQ3PWMX3_sgdfFju',
    token_v2: token,
    notion_url: url,
    text,
    type: ''
  }
}
