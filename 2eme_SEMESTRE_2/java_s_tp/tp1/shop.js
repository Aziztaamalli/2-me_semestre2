document.getElementById('myF').addEventListener('submit', function(event){
  event.preventDefault();
  var pro_id1 = document.getElementById("pro_id").value
  fLoad(pro_id1)
})

function fLoad(pro_id2) {
  fetch(`https://dummyjson.com/products/${pro_id2}`)
    .then(response => {
      if (!response.ok) {
        alert("not found"); // Throw an error if response is not OK
      }
      return response.json(); // lenna melli ken json file bch ywali file 3adi 
    })
    .then(data => {
      const card = document.createElement("div");
      card.classList.add("col-md-4");
      card.innerHTML = `
        <div class="card">
          <img src="${data.thumbnail}" class="card-img-top" alt="Thumbnail">
          <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">${data.description}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Price: <span class="badge bg-success">$${data.price}</span></li>
              <li class="list-group-item">Category: <span class="badge bg-primary">${data.category}</span></li>
              <li class="list-group-item">Brand: <span class="badge bg-info">${data.brand}</span></li>
              <li class="list-group-item">Stock: <span class="badge bg-warning text-dark">${data.stock}</span></li>
            </ul>
          </div>
        </div>`;
      document.querySelector('.container .row').append(card);
    })
    .catch(error => alert(error.message)); // Log the error message
}
// document.getElementById('loadHTTP').addEventListener('click', fLoadOverHTTP);
// document.getElementById('loadHTTPV2').addEventListener('click',fLoadOverHTTPV2 );
function fLoadOverHTTP() {
  fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
      data.products.forEach(i => displayProduct(i)); // Display products in HTML
    })
    .catch(error => console.error('Error fetching products:', error));}

function displayProduct(product) {
  const card = document.createElement('div');
  card.classList.add('col-md-4');
  card.innerHTML = `
    <div class="card">
      <img src="${product.thumbnail}" class="card-img-top" alt="Thumbnail">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.description}</p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Price: <span class="badge bg-success">$${product.price}</span></li>
          <li class="list-group-item">Category: <span class="badge bg-primary">${product.category}</span></li>
          <li class="list-group-item">Brand: <span class="badge bg-info">${product.brand}</span></li>
          <li class="list-group-item">Stock: <span class="badge bg-warning text-dark">${product.stock}</span></li>
        </ul>
      </div>
    </div>`;
  document.querySelector('.container .row').appendChild(card);}
function fLoadOverHTTPV2() {
  fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
      data.products.forEach(i => displayProduct(i)); // Display products in HTML
    })
    .catch(error => console.error('Error fetching products:', error));
}


// de la'activité 4 
// fetch('https://dummyjson.com/products')
//   .then(response => response.text())
//   .then(data => {
//     const jsonData = JSON.parse(data);
//     console.log(jsonData); // Here you can work with the JSON object
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });



// function fokData(data) {
//   var products = data.products;
//   for (let product of products) {
//       displayProduct(product);}}
