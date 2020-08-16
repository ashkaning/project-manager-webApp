const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

router.route("/")
  .post(commentsController.saveComment)

module.exports = router;
