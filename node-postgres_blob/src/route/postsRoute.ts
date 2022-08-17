import Router from 'express';
const router = Router();
import { getPosts, savePost, updatePost, deletePost } from '../service/postsService';

router.get('/posts', async (req, res) => {
  const posts = await getPosts();
  res.json(posts);
})

router.post('/posts', async (req, res) => {
  const post = req.body;
  try {
    const newPost = await savePost(post);
    res.status(201).json(newPost);
  } catch (e) {
    if (e instanceof Error) {
      if (e.message === 'Post already exists') {
        res.status(409).send(e.message)
      } else {
        res.status(500).send(e.message)
      }
    }
  }
})

router.put('/posts/:id', async (req, res) => {
  const post = req.body;
  try {
    await updatePost(req.params.id, post);
    res.status(204).end();
  } catch (e) {


    if (e instanceof Error) {
      if (e.message === 'Post not found') {
        res.status(404).send(e.message)
      } else {
        res.status(500).send(e.message)
      }

    }
  }
})

router.delete('/posts/:id', async (req, res) => {
  await deletePost(req.params.id);
  res.status(204).end();
})



export { router }

