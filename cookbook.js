
// 1 for bass drum, 2 for snare, 0 for rest.
// 3 will be accented snare.
function chooseNote() {
	return Math.floor(Math.random() * 3);
}

function naiveMakeGroove() {
	let groove = [1];
	for (let i = 0; i < 3; i++) {
		groove.push(chooseNote());
	}
	groove.push(3);
	for (let i = 0; i < 7; i++) {
		groove.push(chooseNote());
	}
	groove.push(3);
	for (let i = 0; i < 3; i++) {
		groove.push(chooseNote());
	}
	return groove;
}
