//wish
const { response } = require('../app');
const orderSchema = require('../models/order_model');
const Order = require('../models/order_model');


const getOrder = (req, res, next) => {
    orderSchema.find()
    .then(response => {
        res.json({response})
    })
    .catch(error =>{
        res.json({error})
    })
};

const addOrder = (req, res, next) => {
    const order = new orderSchema({
        Orderid: req.body.Orderid,
        foodItemCode: req.body.foodItemCode,
        noOfPotions: req.body.noOfPotions,
        date: req.body.date,
    });
    order.save()
    .then(response => {
        res.json({response})
    })
    .catch(error =>{
        res.json({error})
    });
}

const updateOrder = (req, res, next) => {
    const {Orderid, foodItemCode, noOfPotions, date} = req.body;
    Order.updateOne({ Orderid: Orderid }, {
        $set: {
          foodItemCode: foodItemCode,
          noOfPotions: noOfPotions,
          date: date
        }
      })
      
    .then(response => {
        res.json({response})
    })
    .catch(error =>{
        res.json({error})
    });
}   
    
const deleteOrder =  (req, res, next) => {
    const Orderid = req.body.Orderid;
    Order.deleteOne({ Orderid:Orderid })
    .then(response => {
        res.json({response})
    })
    .catch(error =>{
        res.json({error})
    });
}  

exports.getOrder = getOrder;
exports.addOrder = addOrder;
exports.updateOrder = updateOrder;
exports.deleteOrder = deleteOrder;