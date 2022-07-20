const Comment = require("../models/Comments.model");

module.exports.commentsController = {
  getComments: async (req, res) => {
    try {
      const comments = await Comment.find()
        .populate("newsId")
        .populate("userId");
      return res.json(comments);
    } catch (error) {
      res.json(error.message);
    }
  },

  getCommentsByNews: async (req, res) => {
    try {
      const comments = await Comment.find({ userId: req.params.id })
        .populate("newsId")
        .populate("userId");
      return res.json(comments);
    } catch (error) {
      res.json(error.message);
    }
  },

  getCommentsByUsers: async (req, res) => {
try {
  const comments = await Comment.find({userId: req.params.id}).populate("newsId").populate("userId");
  return res.json(comments);
} catch (error) {
  res.json(error.message)
}
  },

  postComments: async (req, res) => {
    try {
      const comments = await Comment.create({
        text: req.body.text,
        userId: req.user.id,
        newsId: req.body.newsId,
      });
      return res.json(comments);
    } catch (error) {
      res.json(error.message);
    }
  },

  patchComments: async (req, res) => {
    try {
        const comments = await Comment.findByIdAndUpdate(req.params.id, {
            text: req.body.text,
            userId: req.body.userId,
            newsId: req.body.newsId, 
        });
        return res.json(comments)
    } catch (error) {
        res.json(error.message)
    }
  },

  deleteComments: async (req, res) => {
    try {
        const comments = await Comment.findByIdAndRemove(req.params.id);
        return res.json("Комментарий удален");
    } catch (error) {
        res.json(error.message)
    }
  }
};
