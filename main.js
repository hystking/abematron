const abema_webview = document.getElementById("abema-webview")
const abema_webview_css = document.getElementById("abema-webview-css")

abema_webview.addEventListener("dom-ready", () => {
  abema_webview.insertCSS(abema_webview_css.textContent)
})
