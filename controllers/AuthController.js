module.exports = class {
    static login(req, res){
        res.render('auth/login');
    };

    static register(req, res ){
        res.render('auth/register');
    };
}