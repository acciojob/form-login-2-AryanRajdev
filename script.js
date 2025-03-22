let myform = document.querySelector("#my-form");

myform.addEventListener("submit", (event) => {
    event.preventDefault();  // Prevent page reload on form submission

    let firstName = document.querySelector('input[name="FirstName"]').value;
    let lastName = document.querySelector('input[name="LastName"]').value;
    let phone = document.querySelector('input[name="PhoneNumber"]').value;
    let email = document.querySelector('input[name="EmailID"]').value;

    alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`);

    // Clear input fields after submission
    document.querySelector('input[name="FirstName"]').value = "";
    document.querySelector('input[name="LastName"]').value = "";
    document.querySelector('input[name="PhoneNumber"]').value = "";
    document.querySelector('input[name="EmailID"]').value = "";
});
