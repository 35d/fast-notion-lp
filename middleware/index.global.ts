export default defineNuxtRouteMiddleware((to, from) => {
  /** マニュアルページに来た場合リダイレクトをかける */
  if (to.path.includes("/en/manual")) {
    navigateTo("https://docs.temp.co.jp/how-to-use-en", { redirectCode: 301, external: true });
    return false;
  }

  if (to.path.includes("/manual")) {
    navigateTo("https://docs.temp.co.jp/fast-notion-how-to-use", { redirectCode: 301, external: true });
    return false;
  }
});
