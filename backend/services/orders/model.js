import { Schema, model } from "mongoose";

const ordersSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        cellulare: {
            type: Number,
            required: true,
        },
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
        indirizzo: {
            type: String,
            required: true,
        },
        indirizzo2: {
            type: String,
            required: false,
        },
        citta: {
            type: String,
            required: true,
        },
        stato: {
            type: String,
            required: true,
        },
        provincia: {
            type: String,
            required: true,
        },
        cap: {
            type: String,
            required: true,
        },
        note: {
            type: String,
            required: false,
        },
        products: [{
            type: Schema.Types.ObjectId,
            ref: "Product"
        }],
        prezzototale: {
            type: String,
            required: true,
        },
    },
    { collection: "orders", timestamps: true }
)

export default model("Order", ordersSchema)