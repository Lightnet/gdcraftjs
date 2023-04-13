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

const EntitySchema = new Schema({
  id: ObjectId,
  mapID: { type: String, default: uuidv4 },
  sceneID: { type: String, default: uuidv4 },
  entityID: { type: String, default: uuidv4 },
  name: String,
  content: String,
  isLocked: { type: Boolean, default: false },
  date: { type: Date, default: Date.now }
});


// Compile model from schema
const EntityModel = mongoose.model("Entity", EntitySchema);
export default EntityModel;