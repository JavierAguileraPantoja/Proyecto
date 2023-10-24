const usersController = {};

usersController.renderSignUpForm=(req, res)=>{
    res.render('users/signup');
};
usersController.signup=(req,res)=>{
    res.send('Pagina de SignUp');
};

usersController.renderSignInForm=(req, res)=>{
    res.render('users/signin');
};
usersController.signin=(req, res)=>{
    res.send('Pagina de Signin');
};

usersController.logout=(req, res)=>{
    res.send('Pagina de Logout');
};


module.exports= usersController;