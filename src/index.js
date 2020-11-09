window.onload = () => {
  console.info('App start')

  const selectBtn = document.querySelector('.btn.select-btn')
  const closeBtn = document.querySelector('.btn.close-btn')

  const player = document.querySelector('video.player')
  const inputEl = document.querySelector('input.video-input')

  /**
   * Some big file can not read
   * - NotReadableError(fixed)
   * - Some file type not accepted
   */
  inputEl.onchange = () => {
    const file = inputEl.files[0]

    if (!file) {
      return
    }

    player.preload = 'metadata'
    player.src = URL.createObjectURL(file)
    player.load()
    player.play()
  }

  selectBtn.addEventListener('click', () => {
    inputEl.click()
  })

  // Close window
  closeBtn.addEventListener('click', () => {
    const remote = require('electron').remote
    const currentWindow = remote.getCurrentWindow()

    currentWindow.close()
  })
}