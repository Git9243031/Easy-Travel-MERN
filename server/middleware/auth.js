const User = require("../models/User");

const auth = (req, res, next) => {
  const token = req.cookies.x_auth;

  User.findByToken(token)
    .then(user => {
      req.token = token;
      req.user = user;
      next();
    })
    .catch(err => {
      isAuth: false, err;
    });
};

module.exports = auth;
