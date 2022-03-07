import mongoose from 'mongoose'
const Schema = mongoose.Schema
import { List } from './list.js'

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  lists: [{type: Schema.Types.ObjectId, ref:'List'}]
},{
    timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
