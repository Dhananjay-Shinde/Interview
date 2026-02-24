import { Admin } from "../models/admin.model.js";

export const credit = async (req, res) => {
  const { client_id, amount } = req.body;

  try {
    const admin = await Admin.findOne({ client_id });
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    admin.amount += amount;
    await admin.save();
    res.json({ message: "Credit added successfully", admin });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const debit = async (req, res) => {
  const { client_id, amount } = req.body;

  try {
    const admin = await Admin.findOne({ client_id });
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    if (admin.amount < amount) {
      return res.status(400).json({ error: "Insufficient balance" });
    }
    admin.amount = admin.amount - amount;
    await admin.save();
    res.json({ message: "Debit processed successfully", admin });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
