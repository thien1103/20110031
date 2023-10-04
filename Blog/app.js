const express = require('express');
const app = express();
const port = 3000;

const postController = require('./controllers/postController');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({ extended: true }));

app.get('/', postController.index);
app.get('/posts/create', postController.create);
app.post('/posts', postController.store);
app.get('/posts/:id', postController.show);
app.get('/posts/:id/edit', postController.edit);
app.post('/posts/:id/edit', postController.update);
app.post('/posts/:id/delete', postController.destroy);
app.post('/posts/:id/comment', postController.createComment);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});