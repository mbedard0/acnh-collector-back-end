import mongoose from 'mongoose'

const fossilSchema = new mongoose.Schema({
  url: String, 
  imageUrl: String, 
  fossilGroup: String, 
  interactable: Boolean, 
  sell: Number, 
  width: Number, 
  length: Number,
  colors: [{ type: String }],
  description: String
},
  {
    timestamps: true,
  })

const Fossil = mongoose.model('Fossil', fossilSchema)

export { Fossil }
