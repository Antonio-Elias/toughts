const Tought = require('../models/Tougth');
const User = require('../models/User');


module.exports = class ToughtController {

    static async showToughts(req, res) {
        // console.log('estou no Controler')
        res.render('toughts/home');
    }

    static async dashboard(req, res) {

        const userId = req.session.userid;
        //console.log(userId);

        const user = await User.findOne({
            where: {
                id: userId,
            },
            include: Tought, // traz os dados dos pensamentos, relacionados com o id do usuario
            plain: true, 
        })

        if(!userId){
            res.redirect('/login');
        }

        const toughts = user.Toughts.map((result) => result.dataValues);

        res.render('toughts/dashboard', { toughts });
    }

    static creatTought(req, res) {
        res.render('toughts/create');
    }

    static async creatToughtSave(req, res) {

        const tought = {
            title: req.body.title,
            UserId: req.session.userid
        }

        try {

            await Tought.create(tought);

            req.flash('message', 'Pensamento criado com sucesso!');

            req.session.save(() => {
                res.redirect('/toughts/dashboard');
            });

        } catch (error) {
            console.log(error);
        }
    }

};