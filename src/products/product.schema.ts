import { Schema } from "mongoose";

export const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true }
}, { timestamps: true });