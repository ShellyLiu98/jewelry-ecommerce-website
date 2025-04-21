// 模拟戒指产品数据
const products = {
    1: {
        name: "Empathy Ring",
        originalPrice: "58.00",
        discountedPrice: "46.40",
        description: "A ring that symbolizes empathy and compassion.",
        image: "images/ring1.webp",
		productID: "quantity51",
    },
    2: {
        name: "Venice Ring",
        originalPrice: "30.00",
        discountedPrice: "24.00",
        description: "A beautifully designed ring inspired by Venice.",
        image: "images/ring2.webp",
		productID: "quantity52",
    },
    3: {
        name: "Love Again Ring",
        originalPrice: "65.00",
        discountedPrice: "52.00",
        description: "A ring that represents love and hope.",
        image: "images/ring3.webp",
		productID: "quantity53",
    },
    4: {
        name: "Pearly Girl Ring",
        originalPrice: "45.00",
        discountedPrice: "36.00",
        description: "A ring adorned with pearls for a classic look.",
        image: "images/ring4.webp",
		productID: "quantity54",
    },
    5: {
        name: "Happy Ring",
        originalPrice: "68.00",
        discountedPrice: "54.40",
        description: "A cheerful and elegant ring for any occasion.",
        image: "images/ring5.webp",
		productID: "quantity55",
    },
};

// 获取 URL 中的产品 ID
const urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get("id");

// 如果没有提供 id，设置默认值为 1
if (!productId) {
    console.warn("No product ID provided. Defaulting to ID 1.");
    productId = "1";
}

// 动态更新页面内容
document.addEventListener("DOMContentLoaded", () => {
    if (productId && products[productId]) {
        const product = products[productId];

        // 动态设置产品详情内容
        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-original-price").innerText = '€' + product.originalPrice;
        document.getElementById("product-discounted-price").innerText = '€' + product.discountedPrice;
        document.getElementById("product-description").innerText = product.description;
        document.getElementById("product-image").src = product.image;
		document.getElementById("product-btn").setAttribute("data-name", product.name); 
		document.getElementById("product-btn").setAttribute("data-price", product.originalPrice); 
		document.getElementById("product-btn").setAttribute("data-quantity-id", product.productID); 
		document.getElementById("quantity").setAttribute("id", product.productID); 

        console.log("Product loaded:", product); // 输出调试信息
    } else {
        // 如果未找到产品，显示错误信息
        document.body.innerHTML = "<h1 class='text-center mt-5'>Product not found</h1>";
        console.error("Invalid product ID or product not found");
    }
});