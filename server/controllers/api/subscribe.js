"use strict";

const User = require('../../models').User;

module.exports = {
  signUp: (req, res) => {
    User.findOne({
      email: req.body.email
    }, (err, user) => {
      if (err) console.error(err);
      if (user) res.json({
        success: false,
        reason: 'User with that email already exists'
      });
      else new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
      }).save((err, user) => {
        if (err) console.error(err);
        res.json({
          success: true          
        });
      });
    });
  }
};
