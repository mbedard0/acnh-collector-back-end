import mongoose from 'mongoose'

const fishSchema = new mongoose.Schema({
  name:	String,
  number:	Number,
  imageUrl:	String,
  renderUrl:	String,
  location:	String,
  shadowSize:	String,
  rarity:	String,
  sellNook:	Number,
  sellFlick:	Number,
  catchphrases:	[{type: String}],
  northAvail:	String,
  southAvail:	String,
  time:	String
},
  {
    timestamps: true,
  })

const Fish = mongoose.model('Fish', fishSchema)

export { Fish }
