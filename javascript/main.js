// javascript

// var ball = document.getElementById('ball')
// var ball2 = document.getElementById('ball2')
// var ball3 = document.getElementById('ball3')
// var ball4 = document.getElementById('ball4')

// ball.addEventListener("click", function(){
// 	ball.style.animation = "bounce1 2s" 
// })

// ball2.addEventListener("click", function(){
// 	ball2.style.animation = "bounce2 1s"
// })

// ball3.addEventListener("click", function(){
// 	ball3.style.animation = "bounce3 2s"
// })

// ball4.addEventListener("click", function(){
// 	ball4.style.animation = "bounce4 2s"
// })

function bindListener(elem, anim) {
	var target = document.getElementById(elem)
	target.addEventListener("click", function(){
		target.style.animation = anim
	})
}