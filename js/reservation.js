
async function main () {
  let bookings = await getBookings()
  
  
  bookings.forEach(function (item, idx) {
    
    const trow = document.createElement("tr")
    trow.innerHTML = `
    <th>${idx+1}</th>
    <td>${item.destination}</td>
    <td>${item.checkInDate}</td>
    <td>${item.travelType}</td>
    `
    
    document.querySelector("tbody").append(trow)
  })
}

async function getBookings() {
  let res =  await fetch("http://localhost:3000/getBooking")
  let data = await res.json()

  console.log(data);
  return data
}

main()