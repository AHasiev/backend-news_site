const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");
const AuthMiddleware = require("../middleware/Auth.middleware");

const router = Router();


router.get("/comments", commentsController.getComments);
router.get("/comments/byNews/:id", commentsController.getCommentsByNews);
router.get("/comments/byUsers/:id", commentsController.getCommentsByUsers);
router.patch("/comments", AuthMiddleware, commentsController.patchComments);
router.post("/comments", AuthMiddleware, commentsController.postComments);
router.patch("/comments/:id", AuthMiddleware, commentsController.deleteComments);


module.exports = router;
