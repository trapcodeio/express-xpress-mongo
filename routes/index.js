const express = require('express');
const User = require('../database/models/User');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  /**
   * Create new user or return existing user
   */
  let user = await User.findOne();
  
  if (!user) {
    user = await User.new({
      username: 'john_doe',
      password: '123456',
      email: 'admin@example.com',
    });
  }
  
  console.log(user);
  
  res.render('index', {title: 'Express', user});
});

module.exports = router;