type product = {
  readonly id: string;
  name: string;
  price: number;
};

type OrderItem = {
  product: Product;
  quantity: number;
};

type Order = {
  orderId: string;
  customerName: string;
  items: OrderItem[];
  note?: string; 
};

function calculateOrderTotal(order: Order): number {
  return order.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
}

function printOrder(order: Order): void {
  const total = calculateOrderTotal(order);
  console.log(`Đơn hàng: #${order.orderId}`);
  console.log(`Khách hàng: ${order.customerName}`);
  console.log("Sản phẩm:");
  order.items.forEach((item, index) => {
    console.log(`- ${item.product.name} x ${item.quantity} = ${item.product.price * item.quantity} VND`);
  });
  console.log(`Tổng cộng: ${total} VND`);
  console.log(`Ghi chú: ${order.note || "Không có"}`);
}


const order: Order = {
  orderId: "ORD001",
  customerName: "Nguyễn Văn A",
  items: [
    { product: { id: "P001", name: "Áo sơ mi", price: 500000 }, quantity: 2 },
    { product: { id: "P002", name: "Quần tây", price: 400000 }, quantity: 1 }
  ],
  note: "Giao sau 18h"
};

printOrder(order);