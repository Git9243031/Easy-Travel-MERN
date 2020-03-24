const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");

//=================================
//             User
//=================================

router
  .get("/auth", auth, (req, res) => {
    const { email, name, lastname, role } = req.user;
    res.status(200).json({
      _id: req._id,
      isAuth: true,
      email,
      name,
      lastname,
      role
    });
  })
  .post("/register", (req, res) => {
    const user = new User({ ...req.body });
    console.log("hi: ", user);

    user
      .save()
      .then(result => {
        res.status(200).json({
          success: true,
          data: result
        });
      })
      .catch(err => res.status(400).json({ success: false, err }));
  })
  .post("/login", (req, res) => {
    const { email, password } = req.body;
    // find the email
    User.findOne({ email })
      .then(user => {
        // compare pass

        let token = jwt.sign({ id: user._id }, "secret", {
          expiresIn: 60 * 60
        });
        user.token = token;
        user.tokenExp = 60 * 60;
        // console.log(user);
        // user.save(function(err, user) {
        //   if (err) return cb(err);
        //   cb(null, user);
        // });

        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ success: true });

        // user.compaePassword(password, (err, isMatch) => {
        //   if(isMatch) console.log("match")
        //   if (!isMatch)
        //   console.log("not match");
        //     return res.json({
        //       success: false,
        //       err: "Incorrect email or *password"
        //     });
        // });
        // // generateToken
        // user.generateToken((err, user) => {
        //   if (err)
        //     return res.status(400).json({
        //       success: false,
        //       err: "Incorrect email or password"
        //     });

        //   res
        //     .cookie("x_auth", user.token)
        //     .status(200)
        //     .json({ success: true });
        // });
      })
      .catch(() =>
        res
          .status(404)
          .json({ success: false, err: "Incorrect *email or password" })
      );
  });

module.exports = router;
