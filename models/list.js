import mongoose from 'mongoose'
const Schema = mongoose.Schema

import { InteriorItem } from './interiorItem.js'
import { Furniture } from './furniture.js'
import { Fossil } from './fossil.js'
import { Fish } from './fish.js'
import { Villager } from './villager.js'
import { Clothing } from './clothing.js'
import { Artwork } from './artwork.js'
import { SeaCreature } from './seaCreature.js'
import { Bug } from './bug.js'

const listSchema = new mongoose.Schema({
  listName: String,
  interiorItem: [{ type: Schema.Types.ObjectId, ref: 'InteriorItem' }],
  furniture: [{ type: Schema.Types.ObjectId, ref: 'Furniture' }],
  fossil: [{ type: Schema.Types.ObjectId, ref: 'Fossil' }],
  clothing: [{ type: Schema.Types.ObjectId, ref: 'Clothing' }],
  artwork: [{ type: Schema.Types.ObjectId, ref: 'Artwork' }],
  bugs: [{ type: Schema.Types.ObjectId, ref: 'Bug' }],
  fish: [{ type: Schema.Types.ObjectId, ref: 'Fish' }],
  seaCreatures: [{ type: Schema.Types.ObjectId, ref: 'SeaCreature' }],
  villagers: [{ type: Schema.Types.ObjectId, ref: 'Villager' }]
}
  , {
    timestamps: true,
  })

const List = mongoose.model('List', listSchema)

export { List }
