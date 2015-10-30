

function listeners() {
	console.log('ayyyyyyyy buddy')
}

function returnSomething(n = 5) {
	return n; 
}


function init() {
	listeners();
}

export {
	init,
	returnSomething
}

