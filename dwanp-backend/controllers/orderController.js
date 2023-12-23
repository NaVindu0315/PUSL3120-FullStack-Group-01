//wish


const getOrder = (req, res, next) => {
    Order.find()
    .then(response => {
        res.json({response})
    })
    .catch(error =>{
        res.json({error})
    })
};

const addOrder = (req, res, next) => {
    const order = new Order({
        id: req.body.id,
        name: req.body.name,
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
    const {id, name} = req.body;
    Order.updateOne({id: id}, {$set: {name: name} })
    .then(response => {
        res.json({response})
    })
    .catch(error =>{
        res.json({error})
    });
}   
    
const deleteOrder =  (req, res, next) => {
    const id = req.body.id;
    Order.deleteOne({ id:id })
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