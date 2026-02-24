import { Client } from "../models/client.model.js";

export const createOrder = async (req, res) => {
  const { client_id, order } = req.body;

  try {
    const newOrder = new Client({ client_id, order });
    await newOrder.save();
    res.status(201).json({ message: "Order created successfully", newOrder });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.findOne({ client_id: id });
    if (!client.order) {
      return res.status(404).json({ error: "Client not found" });
    }
    return res.json(client);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getBalance = async (req, res) => {
  const { client_id } = req.query;
  try {
    const client = await Client.findOne({ client_id }).select("amount");
    return res.json({ balance: client?.amount || 0 });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
