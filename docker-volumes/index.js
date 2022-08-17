import express from 'express';

const app = express();

app.get('/posts', (_req, res) => {
  res.status(200).send('List posts')
})
app.listen(3000, () => {
  console.log('Server is running');

})
