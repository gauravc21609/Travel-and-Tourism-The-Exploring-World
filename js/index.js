// ========================================
// Index.html
// ========================================

function mainIndex (){
  let user = JSON.parse(localStorage.getItem("user"))

  console.log(user);
  if (user){
    document.getElementById("user-page").innerText = user.name
  } else {
    document.getElementById("user-page").innerHTML = `<i class="fa-solid fa-user"></i>`
    
  }
}

mainIndex()

