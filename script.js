let myform = document.querySelector("#my-form");

myform.addEventListener("submit", (event) => {
    event.preventDefault();  // Prevent page reload on form submission

    let firstName = document.querySelector('input[name="First Name"]').value;
    let lastName = document.querySelector('input[name="Last Name"]').value;
    let phone = document.querySelector('input[name="Phone Number"]').value;
    let email = document.querySelector('input[name="Email ID"]').value;

    alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phone} Email ID: ${email}`);

    // Clear input fields after submission
    document.querySelector('input[name="First Name"]').value = "";
    document.querySelector('input[name="Last Name"]').value = "";
    document.querySelector('input[name="Phone Number"]').value = "";
    document.querySelector('input[name="Email ID"]').value = "";
});
