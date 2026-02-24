import mongoose from "mongoose";
mongoose.Schema("Client", {
  client_id: {
    type: String,
    required: true,
  },
  order: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Client");
