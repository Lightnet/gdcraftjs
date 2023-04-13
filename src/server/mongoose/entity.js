/*
  Project Name: gdcraftjs
  License: MIT
  Created by: Lightnet
*/

import { Router } from 'express';
import { isEmpty } from '../../libs/helper.js';
import UserModel from '../../libs/db/mongoose/user.js';
import cookie from 'cookie';
import { createJWT } from '../../libs/serverapi.js';
import { v4 as uuidv4 } from 'uuid';
import { config } from 'dotenv';
config();

const SECRET = process.env.SECRET || "TEST0123456789012345678901";
console.log("process.env.SECRET: ",process.env.SECRET)
console.log("SECRET: ",SECRET)
const router = Router()

router.get('/entity', async (req, res) => {
  res.set('Content-Type', 'application/json');
  console.log(req.body)
  const {id, name, content} = req.body;

  res.send(JSON.stringify({api:'get Access!'}))
});

router.post('/entity', async (req, res) => {
  res.set('Content-Type', 'application/json');
  console.log(req.body)
  const {id, name, content} = req.body;

  res.send(JSON.stringify({api:'post Access!'}))
});

export default router;