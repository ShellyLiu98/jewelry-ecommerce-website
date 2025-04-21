const products = {
    1: {
        name: "Brandy Earrings",
        originalPrice: "58.00",
        discountedPrice: "46.40",
        description: "Elegant gold earrings for any occasion.",
        image: "images/earring1.webp",
		productID: "quantity31",
    },
    2: {
        name: "Eternity Earrings",
        originalPrice: "42.00",
        discountedPrice: "33.60",
        description: "A timeless piece of jewelry.",
        image: "images/earring2.webp",
		productID: "quantity32",
    },
    3: {
        name: "Don't Get It Twisted Earrings",
        originalPrice: "36.00",
        discountedPrice: "28.80",
        description: "Unique and modern earrings.",
        image: "images/earring3.webp",
		productID: "quantity33",
    },
    4: {
        name: "Take A Bow Earrings",
        originalPrice: "48.00",
        discountedPrice: "38.40",
        description: "Beautifully designed bow earrings.",
        image: "images/earring4.webp",
		productID: "quantity34",
    },
    5: {
        name: "Fancy Nancy Earrings",
        originalPrice: "50.00",
        discountedPrice: "40.00",
        description: "Stylish and fancy earrings for special occasions.",
        image: "images/earring5.webp",
		productID: "quantity35",
    },
};

// 获取 URL 参数
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

document.addEventListener("DOMContentLoaded", () => {
    if (productId && products[productId]) {
        const product = products[productId];

        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-original-price").innerText = '€' + product.originalPrice;
        document.getElementById("product-discounted-price").innerText = '€' + product.discountedPrice;
        document.getElementById("product-description").innerText = product.description;
        document.getElementById("product-image").src = product.image;
		document.getElementById("product-btn").setAttribute("data-name", product.name); 
		document.getElementById("product-btn").setAttribute("data-price", product.originalPrice); 
		document.getElementById("product-btn").setAttribute("data-quantity-id", product.productID); 
		document.getElementById("quantity").setAttribute("id", product.productID); 
    } else {
        document.body.innerHTML = "<h1 class='text-center mt-5'>Product not found</h1>";
    }
});
