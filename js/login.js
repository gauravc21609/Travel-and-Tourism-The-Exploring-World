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

async function createUser(username, password, email) {
  const sendData = {
    name: username,
    password: password,
    email: email,
  };

  console.log(JSON.stringify(sendData));
  
  let res = await fetch("https://travel-and-tourism-backend.onrender.com/newuser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendData),
  });
  if (res.ok) {
    console.log("successful")
  }
}

document
  .getElementById("login-submit")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    let loginEmail = document.getElementById("login-email").value;
    let loginPasswd = document.getElementById("login-password").value;

    try {
      await loginUser(loginEmail, loginPasswd);
      console.log("login successful");

      window.location.href = "../index.html";

    } catch (error) {
      alert("Wrong email or password!")
      console.error("login failed:", error);
    }
  });

async function loginUser(email, password) {
  const sendData = { email: email, password: password };

  let res = await fetch(
    `https://travel-and-tourism-backend.onrender.com/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    }
  );
  const data = await res.json();
  localStorage.setItem("user", JSON.stringify(data))
  console.log(data);
}