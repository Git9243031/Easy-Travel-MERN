const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
    required: true
  },
  password: {
    type: String,
    minglength: 5,
    required: true
  },
  lastname: {
    type: String,
    maxlength: 50,
    required: true
  },
  role: {
    type: Number,
    default: 0
  },
  image: {
    type: String,
    default:
      "https://f0.pngfuel.com/png/348/800/man-wearing-blue-shirt-illustration-png-clip-art-thumbnail.png"
  },
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
});

userSchema.pre("save", function(next) {
  let user = this;
  const saltRounds = 10;
  if (user.isModified("password")) {
    // console.log('password changed')
    bcrypt.genSalt(saltRounds, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.methods.comparePassword = function(plainPassword, cb) {
  bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function(cb) {
  let user = this;
  let token = jwt.sign(user._id, "secret");
  let oneHour = moment()
    .add(1, "hour")
    .valueOf();

  user.tokenExp = oneHour;
  user.token = token;
  user.save(function(err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function(token, cb) {
  let user = this;

  jwt.verify(token, "secret", function(err, decode) {
    user.findOne({ _id: decode, token: token }, function(err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
