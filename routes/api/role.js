const router = require("express").Router();
const roleController = require("../../controllers/roleController");

router.route("/")
  .post(roleController.create)
  .get(roleController.getAll)
  .delete(roleController.deleteOneRole)
  .get(roleController.getOneRole)
  .put(roleController.updateOneRole)

module.exports = router;
