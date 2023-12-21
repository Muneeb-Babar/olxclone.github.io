function getData (){
  const productId = window.location.search.split('=')[1]
console.log(productId);   
    fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(res => {
        const products = res
        console.log(products);
        const loader = document.getElementById('loader')
        loader.className = 'hide'
        const parentDiv = document.getElementById('products-details')
        const images = products.images
        console.log(images);
        parentDiv.innerHTML = `
        <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner images">
    <div class="carousel-item active">
      <img src="${images[0]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${images[1]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${images[2]}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${images[3]}" class="d-block w-100" alt="...">
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <h3><span class="span">Title: </span>${products.title}</h3>
        <h4><span class="span">Price: </span> ${products.price} $</h4>
        <div class="description">
        <p><span class="span">Description: </span> ${products.description}</p>
    </div>`
      var btn=document.createElement('button')
      var cart=document.getElementById('cart')
      btn.innerHTML='Add to cart'
      cart.append(btn)
      btn.className='btn2'
      
    btn.onclick = ()  =>{
      var addCart=JSON.parse(localStorage.getItem('products'))||[]
  const productId = window.location.search.split('=')[1]

  fetch(`https://dummyjson.com/products/${productId}`)
  .then(res => res.json())
  .then(res => {
      const products = res

      addCart.push(products)
localStorage.setItem('products' , JSON.stringify(addCart))
    
    var cartNumber=document.getElementById('cartNumber')
    cartNumber.innerHTML=addCart.length
  }
)
}})

}
getData()

function goTo1(){
  window.location='./src/signup/cart.html'
}


   // <div class='btn1'>
        // <button class='btn2' onclick='addToCart()'>Add to Cart</button></div>