let result = document.querySelector('.viewing-screen');
let operations = [];
let numsTyped = false;

document.querySelector('.calculator-buttons').addEventListener('click', function(event) {
    buttonClick(event.target.innerText);
});

function buttonClick(buttonPressed){
   	if (isNaN(parseInt(buttonPressed))){
    	operation(buttonPressed);
   	}
   	else{
		num(buttonPressed);
	}
}

function num(buttonPressed){
	if (numsTyped){
    	result.innerText += buttonPressed;
	}
	else{
	   	result.innerText = buttonPressed;
  	}
	numsTyped = true;
}
function operation(buttonPressed){
	if (buttonPressed === 'C'){
    	result.innerText = 0;
    	clear();
   	}
   	else if (buttonPressed === '<='){
   		result.innerText = (result.innerText - result.innerText % 10) / 10;
    }
    else if (buttonPressed === '=' && numsTyped){
		operations.push(result.innerText);
		evaluate(operations);
		clear();
	}
	else{
		addToOperations(result.innerText, buttonPressed);
    	if (operations.length >= 3){
    		evaluate(operations.slice(0, operations.length - 1));
    	}
	}
}

function addToOperations(num, sym){
	operations.push(num);
	operations.push(sym);
	numsTyped = false;
}

function clear(){
	operations = [];
	numsTyped = false;
}

function evaluate(arr){
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