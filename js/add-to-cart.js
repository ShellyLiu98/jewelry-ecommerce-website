$(document).ready(function() {
	const cart = [];

	$(".add-to-cart").click(function() {
		const productName = $(this).data("name");
		const productPrice = parseFloat($(this).data("price"));
		const quantityId = $(this).data("quantity-id");
		const quantity = parseInt($(`#${quantityId}`).val());

		if (quantity > 0) {
			const totalPrice = productPrice * quantity;
			cart.push({ name: productName, price: productPrice, quantity: quantity, total: totalPrice });
			alert(`${quantity} x ${productName} added to cart! Total: €${totalPrice.toFixed(2)}`);
		} else {
			alert("Please enter a valid quantity.");
		}
	});

	$("#go-to-payment").click(function() {
		sessionStorage.setItem("cartData", JSON.stringify(cart));
		window.location.href = "payment.html";
	});
});