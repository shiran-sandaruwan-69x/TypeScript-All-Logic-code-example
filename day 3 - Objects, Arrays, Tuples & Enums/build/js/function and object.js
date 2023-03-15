"use strict";
let date = new Date("2019-01-16");
let orders = {
    orderId: "G001",
    orderDate: new Date("2023-03-11"),
    price: 300
};
function newOrders(orderData) {
    orderData.orderId = "G002";
    orderData.orderDate = new Date("2023-04-11");
}
console.log(orders.orderId);
console.log(orders.orderDate);
