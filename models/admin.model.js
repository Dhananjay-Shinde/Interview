import mongoose from "mongoose";
const AdminSchema = mongoose.Schema({
  client_id: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

export const Admin = mongoose.model("Admin", AdminSchema);
