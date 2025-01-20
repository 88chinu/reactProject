const Transaction = require('../model/transactionModel');

const addTransaction = async (req, res) => {
  const { amount, details, transType } = req.body;
  try {
    const transaction = await Transaction.create({
      user: req.user.id,
      amount,
      details,
      transType,
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id });
    res.json(transactions);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addTransaction, getTransactions };
