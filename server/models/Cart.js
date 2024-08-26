import { model, Schema } from "mongoose";

const cartSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true },
    products: [
      {
        productId: { type: Schema.Types.ObjectId, required: true },
        qty: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

export default model("cart", cartSchema);
