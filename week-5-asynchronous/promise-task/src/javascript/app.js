
// test using axios
axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=feaf2358982f4325b903d09fb7a95e7a")
    .then(function (response) {
        response.data.articles.map((data) => {
            let newsdata = data
            // console.log(newsdata)
            let row = `
            <div class="col">
                <div class="card m-2">
                    <img clas="card-img" width="100%" height="100%" src="${data.urlToImage}" >
                    <div class="card-body">
                    <h4 class="card-title">${data.title}</h4>
                    <p class="card-text">${data.description}</p>
                    <a href="${data.url}" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
            `
            card.innerHTML += row
        })
    })
    .catch(function (error) {
        console.log(error)
    })
    .then(function () {
        console.log("Succes")
    })


// test using fetch
const search = document.getElementById("search")
search.addEventListener("input", function (newsdata) {
    const title = newsdata.target.value

    let url = "https://newsapi.org/v2/everything?" +
        `q=${title}&` +
        "from=2021-09-13&" +
        "sortBy=popularity&" +
        "apiKey=25b7a54b0d48440bb04708972c8ad164"

    
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("result").innerHTML = renderCard(data.articles);
    //   console.log(data.articles);
      document.getElementById("card").style.display = "none";
    })
    .catch((error) =>
        console.log(error)
    )
  function renderCard(d) {
    let column = "";
    d.forEach((result) => {
      column += `
            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 gy-3">
                <div class="card" style="width: 20rem">
                    <img src=${result.urlToImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${result.title}</h5>
                        <p class="card-subtitle text-secondary">${result.author} - ${result.publishedAt}</p>
                        <p class="card-text">
                        ${result.description}
                        </p>
                        <a href=${result.url} class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
            `;
    });
    return column;
  }
})