axios.get("https://newsapi.org/v2/everything?q=tesla&from=2021-08-17&sortBy=publishedAt&apiKey=feaf2358982f4325b903d09fb7a95e7a")
    .then(function (response) {
        let newsdata = response.data.articles.map((data) => {
            console.log(data)
            let row = `
            <div class="col">
            <div class="card m-2">
            <img clas="card-img" width="100%" height="100%" src="${data.urlToImage}" >
            <div class="card-body">
            <h4 class="card-title">${data.author}</h4>
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

