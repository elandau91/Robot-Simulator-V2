document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  let moves = document.getElementById("moves-container")
  let button = document.getElementById("move-button")

document.addEventListener("keydown", function(event) {
  let keyClick = document.createElement("li")
  moves.append(keyClick)

  let keyOptions = {"ArrowUp": "Up", "ArrowDown": "Down", "ArrowLeft": "Left", "ArrowRight": "Right"}

    keyClick.innerText = keyOptions[event.key]

    if (keyClick.innerText == "undefined") {
      keyClick.remove()
    }

});


button.addEventListener("click", function(event) {
  let bullet = document.querySelector("li")

  move(bullet.innerText.toLowerCase())

  bullet.remove()
  event.preventDefault()
})


})

