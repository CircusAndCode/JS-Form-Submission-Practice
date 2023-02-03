// gets the form with the chosen attribute
let loginForm = document.getElementById("loginForm");

// attaches event listener to the form and listens for the submitted event.
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

// validates data by checking if the input is empty  
let username = document.getElementById("username");
let password = document.getElementById("password");

// throws error  
if (username.value == "" || password.value "") {
  alert ("Ensure you input a value in both fields!")  

} else {
  //perform operation with form input
  alert ("This form has been successfully submitted!");
  console.log(
    `This form has a username of ${username.value} and password of ${password.value}`
  );

  username.value = "";
  password.value = "";
}  
});
