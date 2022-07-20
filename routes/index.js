const { Router } = require("express")

const router = Router();

router.use(require("../routes/categories.route"));
router.use(require("../routes/comments.route"));
router.use(require("../routes/news.route"));
router.use(require("../routes/users.route"));


module.exports = router;