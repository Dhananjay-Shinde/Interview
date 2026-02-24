import Client from "../models/client.model.js";

export async function createOrder(req, res) {
  const { client_id, order } = req.body;

  try {
    const newOrder = new Client({ client_id, order });
    await newOrder.save();
    res.status(201).json({ message: "Order created successfully", newOrder });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getOrderById(req, res) {
  const { id } = req.params;
  try {
    const order = await Client.findById(id);
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    return res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function getBalance(req, res) {
  const { client_id } = req.query;
  try {
    const client = await Client.findOne({ client_id }).select("amount");
    return res.json({ balance: client?.amount || 0 });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
