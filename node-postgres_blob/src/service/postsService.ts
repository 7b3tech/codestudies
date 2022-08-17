import { postsData, postData, saveData, deleteData, updateData, Post, getPostByTitle } from '../data/postsData';

export function getPosts() {
  return postsData();
}

export async function getPost(id: string) {
  const post = await postData(id);
  if (!post) throw new Error('Post not found')
  return post;
}

export async function savePost(post: Post) {
  const existingPost = await getPostByTitle(post.title);
  if (existingPost) throw new Error('Post already exists');
  return saveData(post);
}

export function deletePost(id: string) {
  return deleteData(id);
}

export async function updatePost(id: string, post: Post) {
  await getPost(id);
  return updateData(id, post);
}
export { Post };
