export const getUrl = () => {
  return window.localStorage.getItem('fast_notion_url')
}

export const getToken = () => {
  return window.localStorage.getItem('fast_notion_token')
}

export const getIsDbMode = (): boolean => {
  return window.localStorage.getItem('fast_notion_is_db_mode') === 'true'
}
