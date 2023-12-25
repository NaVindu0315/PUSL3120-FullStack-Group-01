const { response } = require("../app");
const invSchema = require("../models/inventory_model");

const getInventory = (req, res, next) => {
  invSchema
    .find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const addInventory = (req, res, next) => {
  const inventory = new invSchema({
    invnt_item: req.body.invnt_item,
    invnt_code: req.body.invnt_code,
    qnty: req.body.qnty,
    price: req.body.price,
    date: req.body.date,
  });
  inventory
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const updateInventory = (req, res, next) => {
  const { id, name } = req.body;
  invSchema
    .updateOne({ id: id }, { $set: { name: name } })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const deleteInventory = (req, res, next) => {
  const id = req.body.id;
  invSchema
    .deleteOne({ id: id })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

exports.getInventory = getInventory;
exports.addInventory = addInventory;
exports.updateInventory = updateInventory;
exports.deleteInventory = deleteInventory;
