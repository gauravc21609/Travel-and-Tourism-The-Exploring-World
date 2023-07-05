document.getElementById("submit-form").addEventListener("click", function (e) {
  e.preventDefault();

  let nm = document.getElementById("reg-name").value;
  let email = document.getElementById("reg-email").value;
  let passwd = document.getElementById("reg-password").value;
  let confirmPasswd = document.getElementById("reg-confirm-password").value;

  if (
    nm.length > 0 &&
    email.length > 0 &&
    passwd.length > 0 &&
    confirmPasswd.length > 0
  ) {
    if (passwd === confirmPasswd) {
      createUser(nm, passwd, email)
    } else {
      alert("Password doesn't match");
    }
  } else {
    alert("Please enter valid details...");
  }
});

function createUser(username, password, email) {
  const sendData = {
    name: username,
    password: password,
    email: email,
  };

  fetch("http://localhost:3000/newuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendData),
  })
  .then(response => response.json())
  .then(result => {
    // Handle the response from the server
    alert("Registration successful!")
    console.log(result);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
  });
}
