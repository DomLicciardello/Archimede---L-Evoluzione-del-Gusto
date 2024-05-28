import { Schema, model } from "mongoose"

const productsSchema = new Schema(
    {
        categoria: {
            type: String,
            required: true,
        },
        prodotto: {
            type: String,
            required: true,
        },
        descrizione: {
            type: String,
            required: true,
        },
        prezzo: {
            type: Number,
            required: true,
        },
        immagine: {
            type: String,
            required: false,
        },
    },
    { collection: "products" }
)

export default model("Product", productsSchema)