fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res => {
    for(var i=0; i<res.products.length; i++){
        console.log(res.products[i])
        var getData=document.getElementById('getData')

        getData.innerHTML+=`<div class="card" style="width: 18rem"; onclick='card1(${res.products[i].id})'>
        <img src='${res.products[i].thumbnail}' class="card-img-top" alt="..." style="width: 100%; height:180px;">
        <div class="card-body">
        <h5 class="card-title">Price ${res.products[i].price}: $</h5>
        <p class="card-text">${res.products[i].description}</p>
        </div>
    </div>`

}})

function card1(id){
    window.location.href = './product.html?productdetails='+id
}

  const userData = JSON.parse(localStorage.getItem('users'))
var replac=document.getElementById('replac')
for(var i=0; i < userData.length; i++){
  replac.innerHTML = userData[i].name
  break;
}



