// 模拟耳环产品数据
const products = [
    { id: 1, name: "Brandy Earrings", price: 58.00, image: "images/earring1.webp" },
    { id: 2, name: "Eternity Earrings", price: 42.00, image: "images/earring2.webp" },
    { id: 3, name: "Don't Get It Twisted Earrings", price: 36.00, image: "images/earring3.webp" },
    { id: 4, name: "Take A Bow Earrings", price: 48.00, image: "images/earring4.webp" },
    { id: 5, name: "Fancy Nancy Earrings", price: 60.00, image: "images/earring5.webp" },
];

// 加载产品到页面
const productGrid = document.getElementById("product-grid");

function loadProducts() {
    products.forEach(product => {
        const discountedPrice = (product.price * 0.8).toFixed(2); // 计算打折价格
        productGrid.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="price">
                            <span class="original-price text-muted text-decoration-line-through">€${product.price.toFixed(2)}</span>
                            <span class="discounted-price text-danger">€${discountedPrice}</span>
                        </p>
                        <button class="btn btn-outline-danger add-to-wishlist" data-id="${product.id}">♥ Add to Wishlist</button>
						</p>
                        <a href="earringsdetail.html?id=${product.id}" class="btn btn-primary">View Details</a> <!-- 跳转链接 -->
                    </div>
                </div>
            </div>
        `;
    });


    // 添加心愿单功能
    addWishlistEventListeners();
}

// 心愿单功能
function addWishlistEventListeners() {
    const wishlistButtons = document.querySelectorAll(".add-to-wishlist");
    wishlistButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productId = this.dataset.id;
            alert(`Product "${products.find(p => p.id == productId).name}" added to your wishlist!`);
        });
    });
}

// 初始化页面
loadProducts();


