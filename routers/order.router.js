"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
const orderRouter = (0, express_1.Router)();
orderRouter.post('/place-order', order_controller_1.postPlaceOrder);
orderRouter.get('/get-orders/:id', order_controller_1.getOrders);
orderRouter.get('/get-orders', order_controller_1.getOrderDetails);
orderRouter.post('/store-payment-data', order_controller_1.postStorePaymentData);
orderRouter.post('/razorpay', order_controller_1.postRazorpay);
orderRouter.post('/verify-payment', order_controller_1.postVerifyPayment);
exports.default = orderRouter;
