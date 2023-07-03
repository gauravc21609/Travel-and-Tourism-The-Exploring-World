document.getElementById("submit-form").addEventListener("click", function (e) {
  e.preventDefault()

  let nm = document.getElementById("name").value
  let email = document.getElementById("email").value
  let passwd = document.getElementById("password").value
  let confirmPasswd = document.getElementById("confirm-password").value

  if (nm.length > 0 && email.length > 0 && passwd.length > 0 && confirmPasswd > 0) {

    if (passwd === confirmPasswd) {
      
    } else {
      alert("Password doesn't match")
    }

  } else {
    alert("Please enter valid details...")
  }
})

async function createUser(username, password, email) {
  
}