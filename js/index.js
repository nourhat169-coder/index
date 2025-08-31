
let nameProduct = document.getElementById("NameProduct")
let priceProduct = document.getElementById("PriceProduct")
let category = document.getElementById("Category")
let model = document.getElementById("Model")

let productContainer = []

if(localStorage.getItem("products") != null){

    productContainer = JSON.parse(localStorage.getItem("products")) 

displayProducts()

}


function addproduct() {
    
    let product = {
        name:nameProduct.value , 
        price:priceProduct.value , 
        category:category.value,
        model:model.value
    }
    productContainer.push(product)
    console.log(productContainer);

    localStorage.setItem("products", JSON.stringify(productContainer))


    clearInput()
    displayProducts()

}
function displayProducts() {

    let shanta = " "
   
    for(let i = 0 ; i < productContainer.length ; i++){

        shanta+= `<tr>
      <th scope="row">${i + 1}</th>
      <td>${productContainer[i].name}</td>
      <td>${productContainer[i].price}</td>
      <td>${productContainer[i].category}</td>
      <td>${productContainer[i].model}</td>
      <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
      <td><button onclick="updateProduct(${i})" class="btn btn-warning">Update</button></td>
    </tr>`
    }
    document.getElementById("t-body").innerHTML = shanta
}

function deleteProduct(index) {
    productContainer.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(productContainer))
    displayProducts()
}

function updateProduct(index) {
    let product = {
        name: nameProduct.value,
        price: priceProduct.value,
        category: category.value,
        model: model.value
    }
    productContainer[index] = product
    localStorage.setItem("products", JSON.stringify(productContainer))
    displayProducts()
    clearInput()
}

function clearInput() {
    nameProduct.value = "";
    priceProduct.value = "";
    category.value = "";
    model.value = "";
}
