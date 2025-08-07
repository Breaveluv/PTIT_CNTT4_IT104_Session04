function calculateOrderTotal(order) {
    return order.items.reduce(function (total, item) { return total + (item.product.price * item.quantity); }, 0);
}
function printOrder(order) {
    var total = calculateOrderTotal(order);
    console.log("\u0110\u01A1n h\u00E0ng: #".concat(order.orderId));
    console.log("Kh\u00E1ch h\u00E0ng: ".concat(order.customerName));
    console.log("Sản phẩm:");
    order.items.forEach(function (item, index) {
        console.log("- ".concat(item.product.name, " x ").concat(item.quantity, " = ").concat(item.product.price * item.quantity, " VND"));
    });
    console.log("T\u1ED5ng c\u1ED9ng: ".concat(total, " VND"));
    console.log("Ghi ch\u00FA: ".concat(order.note || "Không có"));
}
var order = {
    orderId: "ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        { product: { id: "P001", name: "Áo sơ mi", price: 500000 }, quantity: 2 },
        { product: { id: "P002", name: "Quần tây", price: 400000 }, quantity: 1 }
    ],
    note: "Giao sau 18h"
};
printOrder(order);
