const { response } = require('../app');
const Table = require('../models/table_model');

const getTables = (req, res, next) => {
    Table.find()
        .then(response => {
            res.json({response})
        })
        .catch(error => {
            res.json({error})
        })
}

const addTable = (req, res, next) => {
    const table = new Table({
        table_no: req.body.table_no,
        used_date: req.body.used_date,
        used_time: req.body.used_time,
        person_count: req.body.person_count,
    });
    table.save()
        .then(response => {
            res.json({response})
        })
        .catch(error => {
            res.json({error})
        });
};

const updateTable = (req, res, next) => {
    const {table_no, used_date, used_time, person_count} = req.body;
    Table.updateOne({table_no: table_no}, {$set: {used_date: used_date, used_time: used_time, person_count: person_count}})
        .then(response => {
        res.json({response})
        })
        .catch(error => {
        res.json({error})
        });
};

const deleteTable = (req, res, next) => {
    const table_no = req.body.table_no;
    Table.deleteOne({table_no: table_no})
        .then(response => {
        res.json({response})
        })
        .catch(error => {
        res.json({error})
        })
};

exports.getTables = getTables;
exports.addTable = addTable;
exports.updateTable = updateTable;
exports.deleteTable = deleteTable;