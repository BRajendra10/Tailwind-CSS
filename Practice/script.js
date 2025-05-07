let product_container = document.getElementById("add-product-container");
let product_btn = document.getElementById("add-product");

let is_container_hidden = true;

(async function get_data() {
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    let products = await data.products;
    
    products.forEach((product) => {
    //   let new_product = create_product(product);

    //   document.getElementById('main-container').appendChild(new_product);
    console.log(product);
    })
})();

product_btn.addEventListener("click", () => {
  console.log("hello");
  if (is_container_hidden) {
    product_container.classList.remove("hidden");
    is_container_hidden = false;
  } else {
    product_container.classList.add("hidden");
    is_container_hidden = true;
  }
});

// function create_element(tag, class_name = [], tag_info){
//     let el = document.createElement(tag);
//     class_name.forEach((cls) => el.classList.add(cls));
//     if (tag_info !== undefined) el.innerHTML = tag_info;

//     return el;
// }

// function create_product(product){

//     let product_container = create_element('div', ['flex', 'w-[250px', 'bg-white', 'rounded-xl', 'p-3', 'mb-5'])

//     let container = create_element('div', ['w-[250px]']);
//     let image = create_element('img', ['w-[180px]']);
//     image.src = product.thumbnail;
//     let title = create_element('h1', ['text-lg', 'mb-2'], product.title);
//     let discription = create_element('p', ['text-sm', 'mb-2'], product.description);
//     let price = create_element('span', ['text-lg', 'text-orange-400'], `${product.price} $`);

//     let btn_container = create_element('div', ['flex', 'justify-start', 'items-center', 'mt-3']);
//     let buy_btn = create_element('button', ['px-[13px]', 'py-[5px]', 'bg-orange-400', 'rounded-lg', 'mr-3'], 'Buy now');
//     let cart_btn = create_element('button', ['px-[13px]', 'py-[5px]', 'bg-yellow-400', 'rounded-lg', 'mr-3'], 'Add to cart');

//     btn_container.appendChild(buy_btn);
//     btn_container.appendChild(cart_btn);

//     product_container.appendChild(image);
//     product_container.appendChild(container);

//     container.appendChild(title);
//     container.appendChild(discription);
//     container.appendChild(price);
//     container.appendChild(btn_container);

//     return product_container;
// }