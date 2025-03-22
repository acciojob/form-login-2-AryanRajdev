//your JS code here. If required.
let myform = document.querySelector("#my-form");

myform.addEventListener("click",(event)=>{
	event.preventDefault();
	
	let firstName = document.querySelector("#Firsttext").value;
	let lastName = document.querySelector("#Lasttext").value;
	let phone = document.querySelector("#number").value;
	let email  = document.querySelector("#email").value;

	alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`);

	document.querySelector("#Firsttext").value = "";
	document.querySelector("#Lasttext").value = "";
	document.querySelector("#number").value = "";
	document.querySelector("#email").value = "";
})