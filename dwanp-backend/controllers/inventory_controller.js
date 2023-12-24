const Inventory = require("./inventory_model");

const getInventory = (req, res, next) => {
  Inventory.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const addInventory = (req, res, next) => {
  const inventory = new Inventory({
    id: req.body.id,
    name: req.body.name,
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
  User.updateOne({ id: id }, { $set: { name: name } })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};
