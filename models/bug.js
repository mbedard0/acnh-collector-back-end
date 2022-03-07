import mongoose from 'mongoose'

const bugSchema = new mongoose.Schema({
  name:	String,
  number:	Number,
  imageUrl:	String,
  renderUrl:	String,
  location:	String,
  rarity:	String,
  sellNook:	Number,
  sellFlick:	Number,
  catachphrases:	[{type: String}],
  northAvail:	String,
  southAvail:	String,
  time:	String
},
  {
    timestamps: true,
  })

const Bug = mongoose.model('Bug', bugSchema)

export { Bug }
