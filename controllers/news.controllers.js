const News = require("../models/News.model");

module.exports.newsController = {
  getNews: async (req, res) => {
    try {
      const news = await News.find().populate("userId").populate("categoryId");
      res.json(news);
    } catch (error) {
      res.json(error.message);
    }
  },

  createNews: async (req, res) => {
    const { text } = req.body;
    try {
      const news = await News.create({
        title: req.body.title,
        text: req.body.text,
        image: req.body.image,
        categoryId: req.body.categoryId,
        userId: req.body.userId,
      });
      return res.json(news);
    } catch (error) {
      return res.status(401).json({ error: e.message });
    }
  },

  patchNews: async (req, res) => {
    try {
      const news = await News.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        text: req.body.text,
        image: req.body.image,
        categoryId: req.body.categoryId,
        userId: req.body.userId,
      });
      res.json(news);
    } catch (error) {
      res.json(error);
    }
  },

  deleteNews: async (req, res) => {
    const { id } = req.params;
    try {
      const news = await News.findById(id);
      if (news.user.toString() === req.user.id) {
        await news.remove();
        return res.json("Новость УДАЛЕНА");
      }
      return res.status(401).json({ error: "Ошибка. У вас нет прав" });
    } catch (e) {
      return res.status(401).json({ error: "Ошибка" + e.message });
    }
  },

  getNewsCategoryId: async (req, res) => {
    try {
      const news = await News.find("categoryId");
      res.json(news);
    } catch (error) {
      res.json(error.message);
    }
  },
};
