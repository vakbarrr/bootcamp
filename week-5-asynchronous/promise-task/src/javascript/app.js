// axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=feaf2358982f4325b903d09fb7a95e7a")
//     .then(function (response) {
//         response.data.articles.map((data) => {
//             let newsdata = data
//             // console.log(newsdata)
//             let row = `
//             <div class="col">
//                 <div class="card m-2">
//                     <img clas="card-img" width="100%" height="100%" src="${data.urlToImage}" >
//                     <div class="card-body">
//                     <h4 class="card-title">${data.title}</h4>
//                     <p class="card-text">${data.description}</p>
//                     <a href="${data.url}" class="btn btn-primary">Read more</a>
//                     </div>
//                 </div>
//             </div>
//             `
//             card.innerHTML += row
//         })
//     })
//     .catch(function (error) {
//         console.log(error)
//     })
//     .then(function () {
//         console.log("Succes")
//     })
const search = document.getElementById("search")
search.addEventListener("input", function (newsdata) {
    const category = newsdata.target.value


    axios.get("https://newsapi.org/v2/everything?" +
            `q=${category}&` +
            "from=2021-09-13&" +
            "sortBy=popularity&" +
            "apiKey=25b7a54b0d48440bb04708972c8ad164")
        .then(function (response) {
            response.data.articles.map((data) => {
                let row = `
                <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 gy-3">
                    <div class="card" style="width: 20rem">
                        <img src=${data.urlToImage} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">${data.title}</h5>
                            <p class="card-subtitle text-secondary">${data.author} - ${data.publishedAt}</p>
                            <p class="card-text">
                            ${data.description}
                            </p>
                            <a href=${data.url} class="btn btn-dark">Read more ...</a>
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
})