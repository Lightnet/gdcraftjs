/*
  Project Name: gdcraftjs
  License: MIT
  Created by: Lightnet
*/

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SceneSchema = new Schema({
  id: ObjectId,
  userID: String,
  name: String,
  description: String,
  tags: String,
  content: String,
  isLocked: { type: Boolean, default: false },
  isPublic: { type: Boolean, default: false },
  isBan: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});

// Compile model from schema
const SceneModel = mongoose.model("Scene", SceneSchema);
export default SceneModel;