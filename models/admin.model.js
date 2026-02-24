import mongoose from "mongoose";
mongoose.Schema("Admin", {
  client_id: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Admin");
