function addObj(props) {
  const round = (num, places) => Math.round(num / places) * places

  const obj = document.createElement('img')
  obj.id = props.id
  obj.src = `./stuff/${props.sprite}`
  updateObj(obj, props)
  document.body.appendChild(obj)
  return obj
}

function updateObj(obj, props){
  const tx = round(props.x - (props.width / 2), 0.1)
  const ty = round(props.y - (props.height / 2), 0.1)

  obj.width = props.width
  obj.height = props.height
  obj.style.transform = `translate(${tx}px,${ty}px) rotate(${props.direction}deg)`
}

let monsterdata = {
  id: "cookie-monster",
  x: 150,
  y: 150,
  width: 50,
  height: 50,
  direction: 0,
  sprite: "cookie-monster.png"
}

let cookiemonster = addObj(monsterdata)

document.onkeydown = function(e) {
  switch (e.keyCode) {
      case 37:
          // left
          monsterdata.x = monsterdata.x - 30
          break;
      case 38:
          
      // up
          break;
      case 39:
      
      // right
          break;
      case 40:
      
      // down
          break;
  }
  updateObj(monsterdata)
};
