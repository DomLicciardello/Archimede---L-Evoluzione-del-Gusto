import { Schema, model } from "mongoose";

const ordersSchema = new Schema(
    {
        nome: {
            type: String,
            required: true,
        },
        cognome: {
            type: String,
            required: true,
        },
        societa: {
            type: String,
            required: false,
        },
        paese: {
            type: String,
            required: true,
        },
        indirizzo: {
            type: String,
            required: true,
        },
        cap: {
            type: String,
            required: true,
        },
        città: {
            type: String,
            required: true,
        },
        provincia: {
            type: String,
            required: true,
        },
        telefono: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        note: {
            type: String,
            required: false,
        },
        products: [{ type: Schema.Types.ObjectId, ref: "Product" }]
    },
    { collection: "orders", timestamps: true }
)

export default model("Order", ordersSchema)