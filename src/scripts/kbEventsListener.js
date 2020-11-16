/**
 * 处理全局按键事件
 * - left/right: 调节播放进度
 * - space: 控制播放/暂停
 * - enter: 控制全屏模式
 */

window.addEventListener('load', ()=>{
  const DEFAULT_RATE = 3
  const player = document.querySelector('video.player')

  if (!player) {
    return
  }

  window.addEventListener('keypress', (e)=>{
    // NOTE: play status and fullscreen control
    if (e.key == ' ') {
      e.preventDefault()
      
      if (player.paused) {
        player.play()
      } else {
        player.pause()
      }
    } else if (e.key == 'Enter') {
      e.preventDefault()

      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else {
        player.requestFullscreen()
      }
    }
  })

  // NOTE: currentTime and volume control
  window.addEventListener('keydown', (e)=>{
    if (e.key == 'ArrowLeft') {
      e.preventDefault()

      if (player.currentTime > 0) {
        player.currentTime-=DEFAULT_RATE
      }
    } else if (e.key == 'ArrowRight') {
      e.preventDefault()

      if (player.currentTime < player.duration) {
        player.currentTime+=DEFAULT_RATE
      }
    } else if (e.key == 'ArrowUp') {
      e.preventDefault()

      if (player.volume < 1) {
        player.volume+=0.1
      }
    } else if (e.key == 'ArrowDown') {
      e.preventDefault()

      if (player.volume > 0) {
        player.volume-=0.1
      }
    }
  })
})
