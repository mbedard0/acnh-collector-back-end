import mongoose from 'mongoose'
const Schema = mongoose.Schema

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
