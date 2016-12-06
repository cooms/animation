// javascript

function bounce() {
	document.getElementById('ball').style.backgroundColor = "blue";
}

// var style = document.createElement('style');
// style.type = 'text/css';
// style.innerHTML = 'body {}';
// document.getElementById('ball').appendChild(style);
// this.stylesheet = document.styleSheets[document.styleSheets.length-1];
// try {
//   this.stylesheet.insertRule('\
// @keyframes bounce {
// 		from, 20%, 53%, 80%, to {
// 			-webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
// 			animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
// 			-webkit-transform: translate3d(0,0,0);
// 			transform: translate3d(0,0,0);
// 		}

// 		40%, 43% {
// 			-webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
// 			animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
// 			-webkit-transform: translate3d(0, -30px, 0);
// 			transform: translate3d(0, -30px, 0);
// 		}

// 		70% {
// 			-webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
// 			animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
// 			-webkit-transform: translate3d(0, -15px, 0);
// 			transform: translate3d(0, -15px, 0);
// 		}

// 		90% {
// 			-webkit-transform: translate3d(0,-4px,0);
// 			transform: translate3d(0,-4px,0);
// 		}
// 	}', this.stylesheet.rules.length);
//     } catch (e) {};