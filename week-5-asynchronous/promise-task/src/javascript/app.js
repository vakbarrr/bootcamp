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
            newsdata
        })
    })
    .catch(function (error) {
        console.log(error)
    })
    .then(function () {
        console.log("Succes")
    })

