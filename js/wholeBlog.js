async function main() {
  let blog = await getSingleBlog()
  
  const {date, title, location, content} = blog[0]

  document.getElementById("main").innerHTML = `
    <h1>${title}</h1>
    <p>Posted on ${date}</p>
    <small>Located on ${location}</small>
    <p>
      ${content}
    </p>
  `
}

async function getSingleBlog() {
  const url = window.location.href
  const id = parseFloat(url.split("=")[1])

  console.log(id);
  let res = await fetch(`http://localhost:3000/getSingleBlog?id=${id}`)
  let data = await res.json()


  return data
}

main()