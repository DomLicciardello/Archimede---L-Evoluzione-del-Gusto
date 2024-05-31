import express from "express";
import {config} from "dotenv";
import mongoose from "mongoose";
import cors from 'cors';
import { productsRoute } from './services/products/index.js'
import { ordersRoute } from './services/orders/index.js'
import { adminRoute } from "./services/admin/index.js";
import { badRequestHandler, genericErrorHandler, notfoundHandler, unauthorizedHandler } from "./errorHandlers.js"

config();
const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(cors());

app.use("/products", productsRoute);
app.use("/orders", ordersRoute);
app.use("/admin", adminRoute)

app.use(badRequestHandler);
app.use(unauthorizedHandler);
app.use(notfoundHandler);
app.use(genericErrorHandler);

const initServer = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log ("Connesso al database!")
        app.listen(PORT, () => {
        console.log(`Il nostro server sta ascoltando alla porta ${PORT}.`);
        });
    } catch (err) {
        console.log ("Connessione al database fallita!", err);
    }
};

initServer();