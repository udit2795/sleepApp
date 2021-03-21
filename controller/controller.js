const schemas = require('../models/schema');
const controllerHelper = require('../utils/controller_helper');
const config = require('../utils/config');


const addData = async (req, res) => {
    const data = req.body;
    let schema = new schemas.USER();
    try {
        schema = controllerHelper.setData(schema, data);
        schema.save((err, saveObj) => {
            if (err) {
                console.error("addData:: Error in saving data. Error::", err);
                res.status(400).send('Error in saving data. Error::' + err.toString());
            } else {
                console.debug('data saved', saveObj);
                res.status(200).send('data saved');
            }
        })
    } catch (err) {
        console.log("Error in saving data. Error::", err);
        res.status(400).send('Error in saving data. Error::' + err)
    }
};


const getDashboard = async (req, res) => {
    try {
        const {query: {imei = ''}} = req;
        const userData = await schemas.USER.findOne({imei: imei}).lean();
        const context = {
            name: userData.name
        };
        res.json(context);
    } catch (err) {
        console.error("Unable to fetch data. Error::", err);
        res.status(400).send("Unable to fetch data. Error::" + err);
    }
};

const getConfig = (req, res) => {
    return res.json(config);
};


module.exports = {
    addData: addData,
    getDashboard: getDashboard,
    getConfig: getConfig
};
