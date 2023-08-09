async function bookDestination(
  name,
  email,
  phone,
  address,
  boarding,
  destination,
  type,
  count,
  date
) {
  const sendData = {
    name: name,
    phone: phone,
    email: email,
    address: address,
    boarding: boarding,
    destination: destination,
    type: type,
    count: count,
    date: date,
  };

  let res = await fetch(
    "https://travel-and-tourism-backend.onrender.com/booking",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    }
  );

  console.log(await res.json());
}

document
  .getElementById("passenger-details-submit")
  .addEventListener("click", function (e) {
    // For Devprayag
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let boarding = document.getElementById("boarding-point").value;
    let type = document.getElementById("travel-type").value;
    let count = document.getElementById("pass-count").value;
    let date = document.getElementById("date").value;

    let destination = "Devprayag";

    bookDestination(
      name,
      email,
      phone,
      address,
      boarding,
      destination,
      type,
      count,
      date
    );
  });

document
  .getElementById("passenger-details-3")
  .addEventListener("click", function (e) {
    // For Rishikesh
    let name3 = document.getElementById("name3").value;
    let email3 = document.getElementById("email3").value;
    let phone3 = document.getElementById("phone3").value;
    let address3 = document.getElementById("address3").value;
    let boarding3 = document.getElementById("boarding-point3").value;
    let type3 = document.getElementById("travel-type-3").value;
    let count3 = document.getElementById("pass-count-3").value;
    let date3 = document.getElementById("date3").value;

    let destination3 = "Rishikesh";

    bookDestination(
      name3,
      email3,
      phone3,
      address3,
      boarding3,
      destination3,
      type3,
      count3,
      date3
    );
  });

document
  .getElementById("passenger-details-4")
  .addEventListener("click", function (e) {
    // For Tungnath Temple
    let name4 = document.getElementById("name4").value;
    let email4 = document.getElementById("email4").value;
    let phone4 = document.getElementById("phone4").value;
    let address4 = document.getElementById("address4").value;
    let boarding4 = document.getElementById("boarding-point-4").value;
    let type4 = document.getElementById("travel-type-4").value;
    let count4 = document.getElementById("pass-count-4").value;
    let date4 = document.getElementById("date4").value;

    let destination4 = "Tungnath Temple";

    bookDestination(
      name4,
      email4,
      phone4,
      address4,
      boarding4,
      destination4,
      type4,
      count4,
      date4
    );
  });
