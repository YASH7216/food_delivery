import express from 'express';
import authMiddler from '../middleware/auth.js'
import { placeOrder, verifyOrder,userOrders,listorders,updateStatus } from '../controllers/orderController.js';

const orderRouter=express.Router();

orderRouter.post("/place",authMiddler,placeOrder)
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authMiddler,userOrders)
orderRouter.get("/list",listorders)
orderRouter.post("/status",updateStatus)
export default orderRouter