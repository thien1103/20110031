const postModel = require('../models/postModel');

exports.index = (req, res) => {
  const posts = postModel.getAllPosts();
  res.render('index', { posts });
};

exports.create = (req, res) => {
  res.render('create-post');
};

exports.store = (req, res) => {
  const { title, content } = req.body;
  postModel.createPost(title, content);
  res.redirect('/');
};

exports.show = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = postModel.getPostById(postId);
  res.render('post-detail', { post });
};

exports.edit = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = postModel.getPostById(postId);
  res.render('edit-post', { post });
};

exports.update = (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  postModel.updatePost(postId, title, content);
  res.redirect(`/posts/${postId}`);
};

exports.destroy = (req, res) => {
  const postId = parseInt(req.params.id);
  postModel.deletePost(postId);
  res.redirect('/');
};

exports.createComment = (req, res) => {
  const postId = parseInt(req.params.id);
  const { comment } = req.body;
  postModel.addComment(postId, comment);
  res.redirect(`/posts/${postId}`);
};