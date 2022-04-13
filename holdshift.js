
let checkInputs = document.querySelectorAll(".item input[type='checkbox']");
let lastCheck;

function handleCheck(e){

	if(e.shiftKey && this.checked){
		// flag
		let inBetween=false;

		checkInputs.forEach(checkbox => {
			if(checkbox===this || checkbox===lastCheck){
				inBetween =!inBetween;
				// for the corner items
			}

			if(inBetween){
				checkbox.checked = true;
				// for inbetween items
			}
		});


	}

	// setting the lastchecked to this
	lastCheck = this;
}


checkInputs.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
