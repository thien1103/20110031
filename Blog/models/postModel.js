let posts = [];
let postId = 1;

exports.getAllPosts = () => {
  return posts;
};

exports.createPost = (title, content) => {
  const post = { id: postId++, title, content, comments: [] };
  posts.push(post);
};

exports.getPostById = (id) => {
  return posts.find((post) => post.id === id);
};

exports.updatePost = (id, title, content) => {
  const post = posts.find((post) => post.id === id);
  if (post) {
    post.title = title;
    post.content = content;
  }
};

exports.deletePost = (id) => {
  posts = posts.filter((post) => post.id !== id);
};

exports.addComment = (postId, comment) => {
  const post = posts.find((post) => post.id === postId);
  if (post) {
    post.comments.push(comment);
  }
};