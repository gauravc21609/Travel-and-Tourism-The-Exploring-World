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
      createUser(nm, passwd, email);
    } else {
      alert("Password doesn't match");
    }
  } else {
    alert("Please enter valid details...");
  }
});

document
  .getElementById("login-submit")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let loginEmail = document.getElementById("login-email").value;
    let loginPasswd = document.getElementById("login-password").value;

    loginUser(loginEmail, loginPasswd);
    console.log("login here");
  });

async function createUser(username, password, email) {
  const sendData = {
    name: username,
    password: password,
    email: email,
  };

  let res = await fetch("http://localhost:3000/newuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendData),
  });

  console.log(await res.json());
}

async function loginUser(email, password) {
  const sendData = { email: email, password: password };

  let res = await fetch(`http://localhost:3000/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendData),
  });
  const data = await res.json();
  console.log(data);
  if (data) {
    window.location.href = "../index.html";
  } else {
  alert("wrong password or email");
  }
}
