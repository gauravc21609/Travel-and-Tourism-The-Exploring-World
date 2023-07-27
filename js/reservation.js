
async function main () {
  let bookings = await getBookings()
  
  
  bookings.forEach(function (item, idx) {
    
    const trow = document.createElement("tr")
    trow.innerHTML = `
    <th>${idx+1}</th>
    <td>${item.name}</td>
    <td>${item.email}</td>
    <td>${item.phone}</td>
    <td>${item.address}</td>
    <td>${item.boarding}</td>
    <td>${item.destination}</td>
    <td>${item.count}</td>
    <td>${item.date}</td>
    <td>${item.type}</td>
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