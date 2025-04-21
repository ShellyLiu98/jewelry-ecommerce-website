// 模拟手链产品数据
const products = {
    1: {
        name: "Starlight Hand Chain",
        originalPrice: "78.00",
        discountedPrice: "62.40",
        description: "A delicate hand chain that sparkles like starlight.",
        image: "images/bracelet1.webp",
		productID: "quantity21",
    },
    2: {
        name: "Watch Out Bracelet",
        originalPrice: "30.00",
        discountedPrice: "24.00",
        description: "A sleek bracelet perfect for any outfit.",
        image: "images/bracelet2.webp",
		productID: "quantity22",
    },
    3: {
        name: "Western Wednesday Bracelet",
        originalPrice: "65.00",
        discountedPrice: "52.00",
        description: "A stylish bracelet with a western vibe.",
        image: "images/bracelet3.webp",
		productID: "quantity23",
    },
    4: {
        name: "Flutter Bracelet",
        originalPrice: "45.00",
        discountedPrice: "36.00",
        description: "A charming bracelet inspired by fluttering wings.",
        image: "images/bracelet4.webp",
		productID: "quantity24",
    },
    5: {
        name: "Heart In Your Hand Bracelet",
        originalPrice: "68.00",
        discountedPrice: "54.40",
        description: "A bracelet that keeps love close to your hand.",
        image: "images/bracelet5.webp",
		productID: "quantity25",
    },
};

// 获取 URL 中的产品 ID
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// 动态更新页面内容
document.addEventListener("DOMContentLoaded", () => {
    if (productId && products[productId]) {
        const product = products[productId];

        // 动态设置产品详情内容
        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-original-price").innerText = "€" + product.originalPrice;
        document.getElementById("product-discounted-price").innerText = "€" + product.discountedPrice;
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
