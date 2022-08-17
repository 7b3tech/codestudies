import crypto from 'crypto';
import axios from "axios";
import { savePost, updatePost, deletePost, getPost, getPosts, Post } from '../service/postsService';

const generate = function() {
  return crypto.randomBytes(20).toString('hex');
}

const request = function(url: string, method: string, data: Post) {
  return axios({ url, method, data, validateStatus: () => true })
}

test('Should get posts', async function() {
  const post1 = await savePost({ title: generate(), content: generate() })
  const post2 = await savePost({ title: generate(), content: generate() })
  const post3 = await savePost({ title: generate(), content: generate() })
  const response = await request('http://localhost:3000/posts', 'get', { title: '', content: '' })
  expect(response.status).toBe(200);
  const posts = response.data
  expect(posts).toHaveLength(3);
  await deletePost(post1.id)
  await deletePost(post3.id)
  await deletePost(post2.id)
});

test('Should save s post', async function() {
  const data = { title: generate(), content: generate() }
  const response = await request('http://localhost:3000/posts', 'post', data)
  expect(response.status).toBe(201);
  const post = response.data;
  expect(post.title).toBe(data.title);
  expect(post.content).toBe(data.content);
  await deletePost(post.id)
});

test('Should not save s post', async function() {
  const data = { title: generate(), content: generate() }
  const response1 = await request('http://localhost:3000/posts', 'post', data)
  const response2 = await request('http://localhost:3000/posts', 'post', data)
  expect(response2.status).toBe(409);
  const post = response1.data;
  await deletePost(post.id)
});

test('Should update a post', async function() {
  const post = await savePost({ title: generate(), content: generate() })
  post.title = generate();
  post.content = generate();
  const response = await request(`http://localhost:3000/posts/${post.id}`, 'put', { title: post.title, content: post.content })
  expect(response.status).toBe(204);
  const updatedPost = await getPost(post.id)
  expect(updatedPost.title).toBe(post.title)
  await deletePost(post.id)
  expect(updatedPost.content).toBe(post.content)
});

test('Should not update a post', async function() {
  const post = {
    id: 1,
    title: '',
    content: ''
  };
  const response = await request(`http://localhost:3000/posts/${post.id}`, 'put', post)
  expect(response.status).toBe(404);
});

test('Should delete a post', async function() {
  const post = await savePost({ title: generate(), content: generate() })
  const response = await request(`http://localhost:3000/posts/${post.id}`, 'delete', { title: '', content: '' })
  expect(response.status).toBe(204);
  const posts = await getPosts();
  expect(posts).toHaveLength(0)
});
