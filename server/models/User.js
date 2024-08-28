import { model, Schema } from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
import findOrCreate from "mongoose-findorcreate";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    avatar: { type: String },
    username: { type: String, required: true },
    phone: { type: Number },
    password: { type: String },
    hash: { type: String },
    salt: { type: String },
    role: { type: String, default: "user" },
    googleId: { type: String },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  { timestamps: true }
);

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

export default model("user", userSchema);
