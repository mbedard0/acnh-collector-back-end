import mongoose from 'mongoose'

const artworkSchema = new mongoose.Schema({
  url: String,
  imageUrl: String,
  fakeImageUrl: String,
  hasFake: Boolean, 
  name: String,
  artistName: String,
  year: String,
  artStyle: String,
  description: String,
  buy: Number,
  sell: String,
  availability: String,
  authenticity: String,
  width: Number,
  length: Number,
},
  {
    timestamps: true,
  })

const Artwork = mongoose.model('Artwork', artworkSchema)

export { Artwork }
