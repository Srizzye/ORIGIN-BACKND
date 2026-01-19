const { default: mongoose, mongo } = require("mongoose");

const CommentSchema = mongoose.Schema({
  message: String,
  rating: Number,
  likes: Number,
  parent_cmt: mongoose.Types.ObjectId(),
});

const CommentModel = mongoose.model("comments", CommentSchema);

module.exports = CommentModel;
