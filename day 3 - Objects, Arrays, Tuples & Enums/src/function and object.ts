
let date: Date = new Date("2019-01-16");  

type orderTypes={
    orderId?:string,
    orderDate?:Date,
    price?:number
}

let orders:orderTypes = {
    orderId:"G001",
    orderDate:new Date("2023-03-11"),
    price:300
}

function newOrders(orderData:orderTypes){
     orderData.orderId="G002";
     orderData.orderDate=new Date("2023-04-11");
  

}

console.log(orders.orderId);
console.log(orders.orderDate);


