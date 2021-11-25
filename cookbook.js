
// 1 for kick drum, 2 for ghost notes, 0 for rest.
// 3 will be accented snare.
function chooseNotes(groove, num) {
	while (num) {
		groove.push(Math.floor(Math.random() * 3));
		num--;
	}
}

function noGhost(groove, num) {
	while (num) {
		groove.push(Math.floor(Math.random() * 2));
		num--;
	}
}

function naiveGroove() {
	let groove = [1];
	chooseNotes(groove, 3);
	groove.push(3);
	chooseNotes(groove, 7);
	groove.push(3);
	chooseNotes(groove, 3);
	return groove;
}

function limitKick(groove, index) {
	if (groove[index] == 1 && groove[index+1] == 1) {
		let note = Math.random() < 0.5 ? 0 : 2;
		groove.push(note);
	}
}

// No ghost before accent, prevent three kick drums in a row.
function strictGroove() {
	let groove = [1];
	chooseNotes(groove, 2);
	noGhost(groove, 1);
	groove.push(3);
	groove.push(1);
	chooseNotes(groove, 5);
	noGhost(groove, 1);
	groove.push(3);
	chooseNotes(groove, 3);
	return groove;
}

// With ghost before Accent, any number of kicks in a row.
function looseGroove() {
	let groove = [1];
	chooseNotes(groove, 2);
	noGhost(groove, 1);
	groove.push(3);
	groove.push(1);
	chooseNotes(groove, 5);
	noGhost(groove, 1);
	groove.push(3);
	chooseNotes(groove, 3);
	return groove;
}

console.log(naiveGroove());
console.log(strictGroove());