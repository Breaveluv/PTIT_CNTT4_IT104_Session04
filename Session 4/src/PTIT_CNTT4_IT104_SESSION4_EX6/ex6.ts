type Product = {
  id: string;
  name: string;
  price: number;
  category: {
    id: string;
    name: string;
  };
  discount?: number;
};

const listProduct: Product[] = [
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

function getFinalPrice(product: Product): number {
  return product.discount ? product.price - product.discount : product.price;
}

function printProductInfo(product: Product): void {
  const finalPrice = getFinalPrice(product);
  console.log(`1. Tên: ${product.name}`);
  console.log(`2. Giá gốc: ${product.price} VND`);
  console.log(`3. Giá sau giảm: ${finalPrice} VND`);
  console.log(`4. Danh mục: ${product.category.name}`);
}

// Example usage
printProductInfo(listProduct[0]);