let result = document.querySelector('.viewing-screen');
let operations = [];
let possibilities = ['+', '-', 'x', '/'];
let numCount = false;

const addTo = function(num, sym){
	operations.push(num);
	operations.push(sym);
	numCount = false;
}
const clear = function(){
	operations = [];
	numCount = false;
}
const evaluate = function(arr){
	let total = parseInt(arr[0]);
	for (let i = 1; i < arr.length - 1; i += 2){
		if (arr[i] === '+'){
			total += parseInt(arr[i + 1]);
		}
		else if (arr[i] === '-'){
			total -= parseInt(arr[i + 1]);
		}
		else if (arr[i] === 'x'){
			total *= parseInt(arr[i + 1]);
		}
		else if (arr[i] === '/'){
			total /= parseInt(arr[i + 1]);
		}
	result.innerText = total;
	}
}

document.querySelector('.calculator-buttons').addEventListener('click', function(event) {
    let ButtonPressed = event.target.innerText
   	if (ButtonPressed === 'C'){
    	result.innerText = 0;
    	clear(operations);
   	}
	else if (parseInt(ButtonPressed) || ButtonPressed === '0'){
    	if (!numCount){
    		result.innerText = ButtonPressed;
	   	}
	    else{
	   		result.innerText += ButtonPressed;
	  	}
		numCount = true;
   	}
   	else if (possibilities.includes(ButtonPressed)){
    	addTo(result.innerText, ButtonPressed);
    	if (operations.length >= 3){
    		evaluate(operations.slice(0, operations.length - 1));
    	}
    }
    else if (ButtonPressed === '=' && numCount){
		operations.push(result.innerText);
		evaluate(operations);
		clear();
	}
	else{
		result.innerText = (result.innerText - result.innerText % 10) / 10;
	}
});