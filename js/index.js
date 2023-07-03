async function app() {
  let res = await fetch("http://localhost:5500/")
  let data = await res.json()

  console.log(data);
}

app()





