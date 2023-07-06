document
  .getElementById("post-form-submit")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const date = new Date();
    console.log(date);

    let postTitle = document.getElementById("post-title").value;
    let postContent = document.getElementById("post-content").value;
    let postLocation = document.getElementById("post-location").value;

    addBlog(date, postTitle, postContent, postLocation)
  });

async function addBlog(date, title, content, location) {
  let sendData = {
    date: date,
    title: title,
    content: content,
    location: location,
  };

  let res = fetch("http://localhost:3000/addblog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendData),
  });
}
