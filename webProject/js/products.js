(() => {
  
  let productsList = document.querySelector(".productsList");
  const listProducts = () => {
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(data => displayProductsList(data))
    .catch(error => console.error(error));
  }
  
  const displayProductsList = (data) => {
    let list = "<div class=\"row\">";
    for (let i = 0; i < data.length; i++) {
      //for the first 4 products add button link and redirect to product pages related
      if (i < 4) { 
        list += `
          <div class="card">
            <h5 class="card-title">${ data[i].name }</h5>
            <img src=${ data[i].image_url } class="card-img-top" alt=${ data[i].description }>
            <div class="card-body">
              <p class="card-text">${ data[i].tagline }</p>
            </div>
            <a href="product${data[i].id}.html" class="btn btn-primary">Read more...</a>
          </div>
        `;
      } else {
        list += `
          <div class="card">
            <h5 class="card-title">${ data[i].name }</h5>
            <img src=${ data[i].image_url } class="card-img-top" alt=${ data[i].tagline }>
            <div class="card-body">
              <p class="card-text">${ data[i].tagline }</p>
            </div>
            <a href="#" class="btn btn-primary">Read more...</a>
          </div>
        `;
      }

      
    }
    list += "</div>";
    productsList.innerHTML = list;
  }

  listProducts();
})();