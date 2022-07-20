const { Router } = require("express");
const { newsController } = require("../controllers/news.controllers");


const router = Router();

router.get("/news", newsController. getNews);
router.get("/news/byCategory/:id", newsController. getNewsCategoryId);
router.post("/news", newsController. createNews);
router.patch("/news/:id", newsController. patchNews);
router.delete("/news/:id", newsController. deleteNews);


module.exports = router;