axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=feaf2358982f4325b903d09fb7a95e7a")
    .then(function (response) {
        response.data.articles.map((data) => {
            let newsdata = data
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

    const search = document.getElementById("search");
    const results = document.getElementById("results");
    let search_term = "";
    
    const showList = () => {
      results.innerHTML = "";
      newsdata
        .filter((item) => {
          return (
            item.country.toLowerCase().includes(search_term) ||
            item.name.toLowerCase().includes(search_term)
          );
        })
        .forEach((e) => {
            let row = `
            <div class="col">
                <div class="card m-2">
                    <img clas="card-img" width="100%" height="100%" src="${e.urlToImage}" >
                    <div class="card-body">
                    <h4 class="card-title">${e.author}</h4>
                    <p class="card-text">${e.description}</p>
                    <a href="${e.url}" class="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
            `
            card.innerHTML += row
        });
    };
    
    showList();
    
    search.addEventListener("input", (event) => {
      search_term = event.target.value.toLowerCase();
      showList();
    });