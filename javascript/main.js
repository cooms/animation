// javascript
function bounce() {
	document.getElementById('ball').style.backgroundColor = "blue";
}

var cssRule;

  // Returns a reference to the specified CSS rule(s).

  function getRule() {

      var rule;

      var ss = document.styleSheets;

      for (var i = 0; i < ss.length; ++i) {

          // loop through all the rules!

          for (var x = 0; x < ss[i].cssRules.length; ++x) {

              rule = ss[i].cssRules[x];

              if (rule.name == enterPiece && rule.type

                      == CSSRule.KEYFRAMES_RULE) {

                  cssRule = rule;

              }

          }

      }

  }