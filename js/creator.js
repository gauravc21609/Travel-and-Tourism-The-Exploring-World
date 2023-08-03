document
  .getElementById("post-form-submit")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const date = new Date();
    console.log(date);

    let postTitle = document.getElementById("post-title").value;
    let postContent = document.getElementById("post-content").value;
    let postLocation = document.getElementById("post-location").value;

    addBlog(date, postTitle, postContent, postLocation);
  });

async function addBlog(date, title, content, location) {
  let sendData = {
    date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
    title: title,
    content: content,
    location: location,
  };

  console.log(sendData.date);

  let res = fetch("https://travel-and-tourism-backend.onrender.com/addblog", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendData),
  });
}