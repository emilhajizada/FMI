const list = document.querySelectorAll('#video_list_section li')

function toggle(n) {
  const item = list[n]
  const item_arrow = list[n].children[0].children[1]
  const item_img = list[n].children[1]
  const item_play = list[n].children[1].children[1]
  const bool = item_arrow.style.transform === ''
  item_arrow.style.transform = bool ? 'rotate(180deg)' : ''
  item_img.style.visibility = bool ? 'visible' : 'hidden'
  item_img.style.height = bool ? '410px' : '0'
  item_img.style.opacity  = bool ? '1' : '0'
  item_play.style.display = bool ? 'flex' : 'none'
  item.style.padding = bool ? '32px' : '32px 32px 0 32px'
}
