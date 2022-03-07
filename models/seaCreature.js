import mongoose from 'mongoose'

const seaCreatureSchema = new mongoose.Schema({
  catchphrase: String,
  name: String,
  url: String,
  imageUrl: String,
  renderUrl: String,
  movement: String,
  rarity: String,
  sellPrice: Number,
  northAvail: String,
  southAvail: String,
  time: String,
},
  {
    timestamps: true,
  })

const SeaCreature = mongoose.model('SeaCreature', seaCreatureSchema)

export { SeaCreature }
