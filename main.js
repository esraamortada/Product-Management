
var productContainer = [];
if(localStorage.getItem('ourProducts')!=null){
    productContainer= JSON.parse( localStorage.getItem('ourProducts'));
    displayProducts();

}

var productNameInput= document.getElementById('productName');
var productPriceInput= document.getElementById('productPrice');
var productCategoryInput= document.getElementById('productCategory');
var productDescInput= document.getElementById('productDesc');

function add(){
  var product ={
        name:productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    productContainer.push(product);
    localStorage.setItem('ourProducts', JSON.stringify(productContainer));
    clear();
    displayProducts();

}
function clear(){
    productNameInput.value='',
    productPriceInput.value='';
    productCategoryInput.value='';
    productDescInput.value ='';
}
function displayProducts() {
    var cartoona = ``;
    for (var i = 0; i < productContainer.length; i++) {
        cartoona += `<tr>
        <th>${i}</th>
        <th>${productContainer[i].name}</th>
        <th>${productContainer[i].price}</th>
        <th>${productContainer[i].category}</th>
        <th>${productContainer[i].desc}</th>
  
        <th><button onclick="updateProduct(${i})" class="btn btn-outline-info">update</button></th>
        <th><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></th>
       
    </tr>`;
    }
    document.getElementById('tableBody').innerHTML = cartoona;
}


function deleteProduct(index){
    productContainer.splice(index,1);
    localStorage.setItem('ourProducts', JSON.stringify(productContainer));
    displayProducts();
}

function search(term){
    var cartoona = ``;

    for (var i = 0; i < productContainer.length; i++) {

        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())){

          
            
                cartoona += `<tr>
                <th>${i}</th>
                <th>${productContainer[i].name}</th>
                <th>${productContainer[i].price}</th>
                <th>${productContainer[i].category}</th>
                <th>${productContainer[i].desc}</th>
          
                <th><button  onclick="updateProduct(${i})" class="btn btn-outline-info">update</button></th>
                <th><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></th>
               
            </tr>`;
            }
        }
            document.getElementById('tableBody').innerHTML = cartoona;

        
    

}


function updateProduct(index) {

    var product = productContainer[index];
    productNameInput.value = product.name;
    productPriceInput.value = product.price;
    productCategoryInput.value = product.category;
    productDescInput.value = product.desc;
    productContainer.splice(index, 1);
    localStorage.setItem('ourProducts', JSON.stringify(productContainer));
    displayProducts();
}