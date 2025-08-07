type Product={
    id:string;
    name:string;
    price:number;
}
type OrderItem={
    product:Product;
    quantity:number;
    note?:string;
}
type Order={
    orderId:string;
    customerName:string;
    items:OrderItem[];
    deliveryAddress:string;
    isPaid:boolean;
}
type Invoice={
    invoiceId:string;
    orders: Order[];
    createdAt:Date;
}

function caculateOrderTotal(order:Order):number{
    return order.items.reduce((total,item)=>{
        return total+item.product.price*item.quantity
    },0)
}
function caculateInvoiceTotal(invoice:Invoice):number{
    return invoice.orders.reduce((sum,order)=>{
        return sum + caculateOrderTotal(order);
    },0)
}
function getUnpaidOrders(invoice:Invoice){
    return invoice.orders.filter(order=>!order.isPaid);
}
function printInvoice(invoice:Invoice){
    console.log(`Hoa don: ${invoice.invoiceId} - Ngay tao: ${invoice.createdAt.toISOString().split('T')[0]}`);
    console.log('----------------------');
    invoice.orders.forEach(order=>{
        console.log(`\nDon hang: #${order.orderId}- ${order.customerName}`);
        order.items.forEach(item=> {
            const noteText= item.note?` (note: ${item.note})`: '';
            const line = `-${item.product.name} x ${item.quantity} -> ${item.product.price.toLocaleString()} VND${noteText}`
            console.log(line);
            
        })
        const total = caculateOrderTotal(order)
        console.log(`\nTong don: ${total.toLocaleString()} VND`);
        console.log(`\nTrang thai: ${order.isPaid ? "Da thanh toan" :'Chua thanh toan'}`);
             
    })
    const invoiceTotal = caculateInvoiceTotal(invoice)
    console.log(`\n>> Tong cong hoa don: ${invoiceTotal.toLocaleString()} VND`);
}

const aoSoMi: Product ={
    id:'p1',
    name:"Ao so mi",
    price:250000,
}

const quanJean:Product={
    id:'p2',
    name:"Quan Jean",
    price:400000
}
const vayHoa: Product={
    id:'p3',
    name:'Vay Hoa',
    price:700000
}

const order1:Order={
    orderId:"ORD001",
    customerName:"Nguyen van A",
    deliveryAddress:"Ha Noi",
    isPaid:true,
    items:[
        {product: aoSoMi,quantity:2},
        {product:quanJean,quantity:1}
    ]
}
const order2:Order={
    orderId:"ORD002",
    customerName:"Tran Thi B",
    deliveryAddress:"TP.HCM",
    isPaid:true,
    items:[
        {product: vayHoa,quantity:1,note:"size M"},
    ]
}
const invoice: Invoice={
    invoiceId:"INV001",
    orders:[order1,order2],
    createdAt:new Date("2024-05-14")
}
printInvoice(invoice)
