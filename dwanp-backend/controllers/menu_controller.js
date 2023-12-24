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
        id: req.body.id,
        name: req.body.name,
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
    const { id, name } = req.body;
    menSchema
      .updateOne({ id: id }, { $set: { name: name } })
      .then((response) => {
        res.json({ response });
      })
      .catch((error) => {
        res.json({ error });
      });
  };

  



    