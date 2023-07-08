document.getElementById("book-now").addEventListener("submit", function (e) {
  e.preventDefault();

  let destination = document.getElementById("destination").value;
  let checkInDate = document.getElementById("check-in").value;
  let type = document.getElementById("travel-type").value;

  bookDestination(destination, checkInDate, type);
});

async function bookDestination(destination, checkInDate, travelType) {
  let sendData = {
    destination: destination,
    checkInDate: checkInDate,
    travelType: travelType,
  };

  let res = fetch("http://localhost:3000/booking", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendData),
  });

  let data = res.json()
  console.log(data);
}
