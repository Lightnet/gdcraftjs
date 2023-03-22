import express from 'express'

//var app = express()
var userRouter = express.Router()

userRouter.use(express.json())
userRouter.route('/echo')
  .get(function (req, res) {
      res.status(200)
          .send('hello users');
  });

userRouter.route('/json')
  .get(function (req, res) {
      res.status(200)
          .send(JSON.stringify({test:"Hello"}));
  });

userRouter.route('/json')
  .post(function (req, res) {
      console.log(req.body);
      res.status(200)
          .send(JSON.stringify({test:"Hello"}));
  });

export default userRouter;