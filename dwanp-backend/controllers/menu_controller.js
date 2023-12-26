///aruni
///adala functions tika meke dapan

const { response } = require('../app');
const menSchema = require('../models/menu_model');

const getMenu = (req, res, next) => {
    menSchema
    .find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const addMenu = (req, res, next) => {
    const menu = new menSchema({
        
        menu_item_no:req.body.menu_item_no,
        menu_item_name :req.body.menu_item_name,
        menu_item_price: req.body.menu_item_price,
        potion : req.body.potion,

      });
      menu
        .save()
        .then((response) => {
          res.json({ response });
        })
        .catch((error) => {
          res.json({ error });
        });
    };
    
const updateMenu = (req, res, next) => {
  const {menu_item_no,menu_item_name,menu_item_price,potion}=req.body;
    menSchema
      .updateOne({menu_item_no: menu_item_no }, { $set: { menu_item_name:menu_item_name,menu_item_price:menu_item_price,potion:potion } })
      .then(response => {
        res.json({ response });
      })
      .catch((error) => {
        res.json({ error });
      });
  };

const deleteMenu = (req, res, next) => {
    const menu_item_no = req.body.menu_item_no;
    menSchema
    .deleteOne({ menu_item_no: menu_item_no})
    .then(response => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

exports.getMenu = getMenu;
exports.addMenu = addMenu;
exports.updateMenu = updateMenu;
exports.deleteMenu = deleteMenu;





    