$(document).ready(function() {
	const cartData = JSON.parse(sessionStorage.getItem("cartData"));
	if (cartData && cartData.length > 0) {
		let total = 0;
		cartData.forEach(item => {
			$("#cart-items").append(`
				<li>${item.quantity} x ${item.name} - €${item.price} each (Total: €${item.total.toFixed(2)})</li>
			`);
			total += item.total;
		});
		$("#total-price").text("Total Price: €" + total.toFixed(2));
	} else {
		$("#cart-summary").html("<p>No items in cart.</p>");
	}
});