import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import events from 'events';
import userRouter from './routes/userRout.js';
import 'dotenv/config.js'
import cartRouter from './routes/carRoute.js';
import orderRouter from './routes/orderRoute.js';

// Increase the maximum number of listeners
events.EventEmitter.defaultMaxListeners = 20; // Or any other appropriate number

// Initialize the app and set up middleware
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

// Define routes
app.use("/api/Tomato", foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/", (req, res) => {
    res.send("API WORKING");
});

app.listen(port, () => {
    console.log(`server is running on ${port}`);
});


