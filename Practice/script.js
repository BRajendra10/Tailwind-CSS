let product_container = document.getElementById('add-product-container');
let product_btn = document.getElementById('add-product');

let is_container_hidden = true;

product_btn.addEventListener('click', () => {
    console.log('hello')
    if(is_container_hidden){
        product_container.classList.remove('hidden');
        is_container_hidden = false;
    }else{
        product_container.classList.add('hidden');
        is_container_hidden = true;
    }
});

(async function get_data(){
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    let products = await data.products;
})();