var listProduct = [
    {
        id: "P001",
        name: "Áo sơ mi",
        price: 300000,
        category: { id: "C001", name: "Thời trang nam" },
        discount: 60000
    },
    {
        id: "P002",
        name: "Quần jeans",
        price: 450000,
        category: { id: "C001", name: "Thời trang nam" }
    },
    {
        id: "P003",
        name: "Váy maxi",
        price: 500000,
        category: { id: "C002", name: "Thời trang nữ" },
        discount: 100000
    }
];
function getFinalPrice(product) {
    return product.discount ? product.price - product.discount : product.price;
}
function printProductInfo(product) {
    var finalPrice = getFinalPrice(product);
    console.log("1. T\u00EAn: ".concat(product.name));
    console.log("2. Gi\u00E1 g\u1ED1c: ".concat(product.price, " VND"));
    console.log("3. Gi\u00E1 sau gi\u1EA3m: ".concat(finalPrice, " VND"));
    console.log("4. Danh m\u1EE5c: ".concat(product.category.name));
}
// Example usage
printProductInfo(listProduct[0]);
