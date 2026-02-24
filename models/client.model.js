import mongoose from "mongoose";
const ClientSchema = mongoose.Schema({
  client_id: {
    type: String,
    required: true,
  },
  order: {
    type: String,
  },
});

export const Client = mongoose.model("Client", ClientSchema);
