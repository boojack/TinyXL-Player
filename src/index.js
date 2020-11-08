
window.onload = () => {
  console.info('App start')

  const selectBtn = document.querySelector('.btn.select-btn')
  const closeBtn = document.querySelector('.btn.close-btn')
  const inputEl = document.querySelector('input.video-input')

  const video = document.querySelector('video.video')

  selectBtn.addEventListener('click', ()=>{
    inputEl.click()
  
    /**
     * Some big file can not read: NotReadableError
     */
    inputEl.onchange = ()=>{
      const file = inputEl.files[0]
      if (!file || !/^video/.test(file.type)) {
        alert('Wrong file')
        return
      }
      
      const fileReader = new FileReader()

      fileReader.readAsArrayBuffer(file)
      fileReader.onload = ()=>{
        const blob = new Blob([fileReader.result], {
          type: file.type
        })
        const url = URL.createObjectURL(blob)
  
        video.preload = 'metadata'
        video.src = url
        video.play()
      }
      fileReader.onerror = (e)=>{
        console.error(e)
      }
    }
  })

  closeBtn.addEventListener('click', ()=>{
    const remote = require('electron').remote
    const currentWindow = remote.getCurrentWindow()

    currentWindow.close()
  })
}