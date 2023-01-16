const User = require('../models/User');
const bcrypt = require('bcryptjs');


module.exports = class {
    static login(req, res){
        //console.log(req.get('content-Type'));
        res.render('auth/login');
    };

    static async loginPost(req, res){
        const { email, password } = req.body;
    
        // console.log(req.body);
        //find user
        const user = await User.findOne( { where:{ email:email } })

        if(!user){
            req.flash('message', 'Usuário não encontrado!');
            res.render('auth/login');
            return;
        }
        // check if passwords match
       
        try {
            const passwordMatch = bcrypt.compareSync(password, user.password);

            if(!passwordMatch){
                req.flash('message', 'Senha Invalida!');
                res.render('auth/login');
                return;
            }
            //console.log('antes de setar o user id do session', req.session);
            req.session.userid = user.id;
           //console.log('depois de setar o user id do session', req.session);
           //console.log(req.session);


            req.flash('message' , 'Login efetuado com sucesso!');
            req.session.save(() => {
                //console.log('estou no save session');
                res.redirect('/');
            });
        } catch (error) {
            console.log(error);
        }
    };

    static register(req, res ){
        res.render('auth/register');
    };

    static  async registerPost(req, res ){
        const { name, email, password, confirmpassword } = req.body;

        //password match validation
        if(password != confirmpassword){
            req.flash('message', 'As senhas não conferem, tente novamente!');
            res.render('auth/register');
            return;
        }

        // check if user exists
        const checkIfUserExists = await User.findOne({ where: { email: email }});

        if( checkIfUserExists){
            req.flash('message', 'O e-mail já está em uso!');
            res.render('auth/register');
            return;
        }

        // create a password
        const salt = bcrypt.genSaltSync(10);
        const hashdPassword = bcrypt.hashSync(password, salt);

        const user = {
            name,
            email,
            password: hashdPassword
        }

        try {
            const createdUser = await User.create(user);
            req.session.userid = createdUser.id;

            req.flash('message' , 'Cadastro realizado com sucesso!');

            req.session.save(() => {
                //console.log('estou no save session');
                res.redirect('/');
            });
            
        } catch (error) {
            console.log(error);
        }
    };

    static logout(req, res){
        req.session.destroy();
        res.redirect('/login');
    };

}