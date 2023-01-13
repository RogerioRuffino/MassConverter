let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');

// now addEventListener
input.addEventListener('keyup',myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);

// taking initial values
option_from = inputType.value;
option_to = resultType.value;

function myResult(){
    option_from = inputType.value;
    option_to = resultType.value;

  
    if(option_from === "kg" && option_to==="ton"){
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "kg" && option_to==="@"){
		result.value = Number(input.value) / 30;
	}else if(option_from === "kg" && option_to==="kg"){
		result.value = input.value
	}



	if(option_from === "ton" && option_to==="kg"){
		result.value = Number(input.value) * 1000;
	}else if(option_from === "ton" && option_to==="ton"){
		result.value = Number(input.value);
	}else if(option_from === "ton" && option_to==="@"){
		result.value = (Number(input.value)*1000)/30;
	}

	if(option_from === "@" && option_to==="@"){
	result.value = Number(input.value);
	}else if(option_from === "@" && option_to==="kg"){
	result.value = Number(input.value) * 30;
	}else if(option_from === "@" && option_to==="ton"){
	result.value = (Number(input.value)*30)/1000;
	}

}
