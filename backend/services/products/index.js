import { Router } from "express"
import Product from "./model.js"
import { authMidd } from '../../auth/index.js'
import multerImg from "../../config/multerImg.js"

export const productsRoute = Router();

productsRoute.get("/", async (req, res, next) => {
    try {
        const page = req.query.page || 1
        let products = await Product.find(
            req.query.prodotto ? { prodotto: { $regex: req.query.prodotto } } : {}
        )
        .limit(20)
        .skip(20 * (page - 1))
        res.send(products)
    } catch (error) {
        next(error);
    }
})

productsRoute.get("/:id", async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id)
        res.send(product)
    } catch (error) {
        next(error);
    }
})

productsRoute.post("/", authMidd, async (req, res, next) => {
    try {
        let product = await Product.create({...req.body})
        res.send(product);
    } catch (error) {
        next(error);
    }
})

productsRoute.patch("/:id/img", authMidd, multerImg, async (req, res, next) => {
    try {
      let update = await Product.findByIdAndUpdate(
        req.params.id,
        { immagine: req.file.path },
        {
          new: true,
        }
      )
      res.send(update)
    } catch (error) {
      next(error)
    }
  })

productsRoute.put("/:id", async (req, res, next) => {
    try {
        let product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        res.send(product)
    } catch (error) {
        next(error);
    }
})

productsRoute.delete("/:id", async (req, res, next) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.sendStatus(204)
    } catch (error) {
        next(error);
    }
})