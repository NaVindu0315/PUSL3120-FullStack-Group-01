let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Customer Model
let customerSchema = require("../models/customer_model");

// CREATE Customer
router.route("/createcustomer").post(async (req, res, next) => {
  await customerSchema
    .create(req.body)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully added!",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// READ Customers
router.route("/viewcustomers").get(async (req, res, next) => {
  await customerSchema
    .find()
    .then((result) => {
      res.json({
        data: result,
        message: "All items successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// Get Single Customer
router.route("/get-customer/:id").get(async (req, res, next) => {
  await customerSchema
    .findById(req.params.id)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully fetched.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// Update Customer
router.route("/update-customer/:id").put(async (req, res, next) => {
  await customerSchema
    .findByIdAndUpdate(req.params.id, {
      $set: req.body,
    })
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully updated.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

// Delete Customer
router.route("/delete-customer/:id").delete(async (req, res, next) => {
  await customerSchema
    .findByIdAndRemove(req.params.id)
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully deleted.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

module.exports = router;