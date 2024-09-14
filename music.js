document.querySelectorAll('button').forEach((el) => {
  el.addEventListener('click', ({ currentTarget }) => {
    const audioEl = currentTarget.querySelector('audio')

    currentTarget.classList.toggle('paused', !audioEl.paused)
    currentTarget.classList.toggle('playing', audioEl.paused)
    audioEl.paused ? audioEl.play() : audioEl.pause()
  })
})
