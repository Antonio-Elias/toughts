const Tought =  require('../models/Tougth');
const User = require('../models/User');


module.exports = class ToughtController {
    static showToughts(req, res){
        console.log('estou no Controler')
        res.render('toughts/home');
    }
};