(() => {

  let product1 = document.querySelector(".product");

  const listProduct = () => {
    fetch("https://api.punkapi.com/v2/beers/1")
    .then(response => response.json())
    .then(data => displayProduct(data))
    .catch(error => console.error(error));
  }

  const displayProduct = (data) => {
        // imgProduct
    // <h5 id="name"></h5>
    // <p id="tagline" class="mb-2 text-muted text-uppercase small"></p>
    // <p id="first_brewed"></p>
    // <p id="description"></p>
    // <p id="abv"></p>
    // <p id="food_pairing"></p>

    let imgProduct = document.querySelector("#imgProduct");
    let name = document.querySelector("#name");
    let tagline = document.querySelector("#tagline");
    let firstBrewed = document.querySelector("#first_brewed");
    let description = document.querySelector("#description");
    let abv = document.querySelector("#abv");
    let foodPairing = document.querySelector("#food_pairing");

    name.innerText = data[0].name;
    tagline.innerText = data[0].tagline;
    firstBrewed.innerText += " " + data[0].first_brewed;
    description.innerText += " " + data[0].description;
    abv.innerText += " " + data[0].abv + "%";
    foodPairing.innerText += " " + data[0].food_pairing;
    imgProduct.src = data[0].image_url;
  }

  listProduct();
})();