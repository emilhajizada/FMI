const list = document.querySelectorAll('#video_list_section li')

function toggle(n) {
  const item_arrow = list[n].children[0].children[1]
  const item_img = list[n].children[1]
  const bool = item_arrow.style.transform == ''
  item_arrow.style.transform = bool ? 'rotate(180deg)' : ''
  item_img.style.display = bool ? 'flex' : 'none'
}
