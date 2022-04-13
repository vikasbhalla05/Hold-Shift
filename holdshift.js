
let checkInputs = document.querySelectorAll(".item input[type='checkbox']");
console.log(checkInputs);

function handleCheck(e){
	console.log(this);
}


checkInputs.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
