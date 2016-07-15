const {app, BrowserWindow} = require("electron")

let main_window

app.on("ready", () => {
  const main_window = new BrowserWindow({width: 400, height: 300})

  main_window.on('closed', () => {
    win = null
  })

  main_window.loadURL("https://abema.tv/now-on-air/abema-news")
})


