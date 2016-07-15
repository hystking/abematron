const {app, BrowserWindow} = require("electron")

const SCALE = 20

let main_window

app.on("ready", () => {

  main_window = new BrowserWindow({
    width: 16 * SCALE,
    height: 9 * SCALE,
    alwaysOnTop: true,
    frame: false,
    resizable: false,
    transparent: true,
  })

  main_window.on("closed", () => {
    main_window = null
  })

  main_window.loadURL(`file://${__dirname}/main.html`)
})


