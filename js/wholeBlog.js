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
  const urlParameter = new URLSearchParams(url)
  const id = urlParameter.get('id');

  console.log(url);
  let res = await fetch(`http://localhost:3000/getSingleBlog?id=265.00543602337956`)
  let data = await res.json()


  return data
}

main()