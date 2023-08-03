async function getBlogs() {
  let res = await fetch(
    "https://travel-and-tourism-backend.onrender.com/getBlog"
  );
  let data = await res.json();

  return data;
}

async function main() {
  let blog = await getBlogs();
  console.log(blog);

  blog.forEach(function (item) {
    const { id, content, title, date, location } = item;

    let articleElm = document.createElement("article");
    articleElm.classList = "blog-post";

    articleElm.innerHTML += `
      <h3 class="blog-title">${title}</h3>
        <p class="blog-meta">Posted on ${date}</p>
        <small>Located on ${location}</small>
        <p>
          ${content.slice(0, 100)}...
        </p>
        <a href="../wholeBlog.html?id=${id}" class="read-more" target="_blank">Read More</a>`;

    document.querySelector(".blog").append(articleElm);
  });
}

main();