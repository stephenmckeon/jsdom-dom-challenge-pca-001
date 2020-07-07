let i = 0
const likes = document.querySelector(".likes")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const heart = document.getElementById("heart")
const pause = document.getElementById("pause")
const submit = document.getElementById("submit")
const comments = document.getElementById("list")

let myVar = setInterval(incrementTimer, 1000)
plus.addEventListener("click", incrementTimer)
minus.addEventListener("click", decrementTimer)
heart.addEventListener("click", addLike)
pause.addEventListener("click", pauseOrResumeTimer)

function incrementTimer() {
  document.getElementById("counter").innerHTML++
}

function decrementTimer() {
  document.getElementById("counter").innerHTML--
}

function addLike() {
  let obj = document.getElementById(counter.innerText);
  obj ? obj.children[0].innerText++ :
  likes.innerHTML += `<li id=${counter.innerText}>${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
}

function pauseOrResumeTimer() {
  if (pause.innerHTML == " pause ") {
    minus.disabled = true
    plus.disabled = true
    heart.disabled = true
    submit.disabled = true
    document.getElementById("pause").innerHTML = " resume "
    clearInterval(myVar)
  } else {
    minus.disabled = false
    plus.disabled = false
    heart.disabled = false
    submit.disabled = false
    document.getElementById("pause").innerHTML = " pause "
    myVar = setInterval(incrementTimer, 1000)
  }
}

submit.addEventListener("click", function(event) {
  event.preventDefault()

  const comment = document.getElementById("comment-input").value
  let node = document.createElement("p")
  node.innerHTML = comment
  comments.appendChild(node)
})
