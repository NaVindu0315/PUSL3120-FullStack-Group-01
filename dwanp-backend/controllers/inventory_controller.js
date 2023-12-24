const inventory = require("./inventory_model");

const getInventory = (req, res, next) => {
  inventory
    .find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};
