import { Schema, model } from "mongoose";

const adminSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { collection: "admin" }
)

export default model("Admin", adminSchema)