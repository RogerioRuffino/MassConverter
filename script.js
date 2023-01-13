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
		//this is kg to ton formula 
		result.value = Number(input.value) * 0.001;
	}else if(option_from === "kg" && option_to==="@"){

		//this is kg to @ formula 
		result.value = Number(input.value) / 30;

	}else if(option_from === "kg" && option_to==="kg"){
		//this is kg to kg formula 
		result.value = input.value
	}



	if(option_from === "ton" && option_to==="kg"){
		//this is ton to kg formula 
		result.value = Number(input.value) * 1000;
	}else if(option_from === "ton" && option_to==="@"){
		//this is ton to @ formula 
		result.value = Number(input.value) * 100000;
	}else if(option_from === "ton" && option_to==="ton"){
		//this is ton to ton formula 
		result.value = input.value
	}

	if(option_from === "ton" && option_to==="@"){
		//this is @ to ton formula 
		result.value = Number(input.value) / 30;
	}else if(option_from === "@" && option_to==="kg"){
		//this is @ to kg formula 
		result.value = Number(input.value) * 30;
	}else if(option_from === "@" && option_to==="@"){
		//this is @ to @ formula 
		result.value = input.value
	}
	





}
