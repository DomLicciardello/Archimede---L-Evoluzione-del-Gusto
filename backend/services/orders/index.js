import { Router } from "express"
import Order from "./model.js"

export const ordersRoute = Router();

ordersRoute.get("/", async (req, res, next) => {
    try {
        const page = req.query.page || 1
        let orders = await Order.find(
            req.query.email ? { email: { $regex: req.query.email } } : {}
        )
        .limit(8)
        .skip(8 * (page - 1))
        .populate('products')
        res.send(orders)
    } catch (error) {
        next(error);
    }
})

ordersRoute.post("/", async (req, res, next) => {
    try {
        let order = await Order.create({...req.body})
        res.send(order);
    } catch (error) {
        next(error);
    }
})

ordersRoute.put("/:id", async (req, res, next) => {
    try {
        let order = await Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        res.send(order)
    } catch (error) {
        next(error);
    }
})

ordersRoute.delete("/:id", async (req, res, next) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        next(error);
    }
})