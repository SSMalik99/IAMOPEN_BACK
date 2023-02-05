const express = require('express');

const router = express.Router();
const authenticateUser = require("../Middleware/AuthenticateUser")

const {
  getAllUsers,
  getSingleUser,
//   showCurrentUser,
  updateUser,
  updateUserPassword,
} = require('../Controllers/UserController');

router.route("/").get(authenticateUser, getAllUsers);

router.route('/updateUser').post(authenticateUser, updateUser);
router.route('/updateUserPassword').post(authenticateUser, updateUserPassword);

router.route('/:id').get(authenticateUser, getSingleUser);

module.exports = router;