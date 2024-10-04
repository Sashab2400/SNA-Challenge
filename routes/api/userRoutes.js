const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  //addFriend,
  //removeFriend,
 // addReactions,
} = require('../../controllers/userController');

// /api/students
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/students/:studentId/assignments
//router.route('/:userId/reactions').post(addReactions);

// /api/students/:studentId/assignments/:assignmentId
//router.route('/:userId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
