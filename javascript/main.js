// javascript
function bounce() {
	document.getElementById('ball').style.backgroundColor = "blue";
	var rule;
	var ss = document.styleSheets;
	for (var i = 0; i < ss.length; ++i) {
		// loop through all the rules!
		for (var x = 0; x < ss[i].cssRules.length; ++x) {
			rule = ss[i].cssRules[x];
			if (rule.name == bounce && rule.type == CSSRule.KEYFRAMES_RULE) {
				cssRule = rule;
			}
		}
	}
}

var ball = document.getElementById('ball')

ball.addEventListener("click", function(){
	ball.style.animation = "bounce 1s"
})