var dragging = false
var position = null
const box = document.getElementById('content');

box.addEventListener('mousedown',function(e){
  dragging = true
  position = [e.clientX, e.clientY]
})


document.addEventListener('mousemove', function(e){
  if(dragging === false) return null
  const x = e.clientX
  const y = e.clientY
  const deltaX = x - position[0]
  const deltaY = y - position[1]
  const left = parseInt(box.style.left || 0)
  const top = parseInt(box.style.top || 0)
  box.style.left = left + deltaX + 'px'
  box.style.top = top + deltaY + 'px'
  position = [x, y]
})
document.addEventListener('mouseup', function(){
  dragging = false
})
