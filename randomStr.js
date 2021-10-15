function charactor(arr) {
	let num = Math.floor(Math.random() * arr.length);
	return num;
}
function randomStr() {
	const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
	const upperCaseLetters = lowerCaseLetters.toUpperCase();
	const numbers = "1234567890";
	let collection = [];
	collection = collection
		.concat(lowerCaseLetters.split(""))
		.concat(upperCaseLetters.split(""))
		.concat(numbers.split(""));

	let str = "";
	for (let i = 0; i < 5; i++) {
		str += collection[charactor(collection)];
		// password+=collection[index]
	}
	return str;
}
module.exports = randomStr;
