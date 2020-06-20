/* let n = Math.random();

console.log(n); */

const randomNumber = () => {
	const max = document.getElementById('max').value;

	let number = Math.random() * max;

	number = Math.floor(number) + 1;

	document.getElementById('number').innerHTML = number;
};
