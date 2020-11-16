window.addEventListener('load', ()=>{
  console.info('App start')

  const selectBtn = document.querySelector('.btn.select-btn')
  const closeBtn = document.querySelector('.btn.close-btn')

  const player = document.querySelector('video.player')
  const inputEl = document.querySelector('input.video-input')
  const vnameText = document.querySelector('.vname-text')

  /**
   * - NotReadableError(fixed)
   * - Some file type not accepted(HTML input accept problem)
   */
  inputEl.onchange = () => {
    try {
      const file = inputEl.files[0]

      if (!file || !file.type.includes('video/')) {
        return
      }

      vnameText.innerText = file.name

      player.preload = 'metadata'
      player.src = URL.createObjectURL(file)
      player.load()
      player.play()
    } catch (error) {
      vnameText.innerText = ''
      console.error(error)
      alert('Select a VIDEO file PLZ')
    }
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

  // NOTE: Dynamic height adjustment
  window.onresize = ()=>{
    player.style.height = document.body.offsetHeight - 30 + 'px'
  }
})
