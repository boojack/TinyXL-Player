window.onload = () => {
  console.info('App start')

  const fileInput = document.querySelector('input.file-input')
  const video = document.querySelector('video.video')

  fileInput.onchange = (e) => {
    const file = fileInput.files[0]

    if (!/^video/.test(file.type)) {
      alert('Wrong file')
    }
    var fileReader = new FileReader()
    fileReader.readAsArrayBuffer(file)

    fileReader.onload = function () {
      var blob = new Blob([fileReader.result], {
        type: file.type
      })
      var url = URL.createObjectURL(blob)

      var timeupdate = function () {
        video.removeEventListener('timeupdate', timeupdate)
        video.pause()
      }
      video.addEventListener('loadeddata', function () {
        console.error('ahsdkh')
        video.removeEventListener('timeupdate', timeupdate)
      })
      video.addEventListener('timeupdate', timeupdate)
      video.preload = 'metadata'
      video.src = url
      video.play()
    }

  }
}