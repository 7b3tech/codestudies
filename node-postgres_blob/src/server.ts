import express from 'express';
import { router } from './route/postsRoute'

const app = express();

app.use(express.json());
app.use('/', router);
// app.use(function(error: express.ErrorRequestHandler, req: express.Request, res: express.Response, next: express.NextFunction) {

//   if (error.message === 'Post already exists') {
//     res.status(409).send(error.message)
//   } else {
//     res.status(500).send(error.message)
//   }
// })

app.listen(3000, () => {
  console.log('server is runnig on port 3000')
})

// import gameClass from './server';
// import { getName } from './server';

// const game = new gameClass();

// game.show();
// getName();

