import mongoose from 'mongoose'

const furnitureSchema = new mongoose.Schema({
  url: String,
  name: String,
  category: String,
  itemSeries: [{type: String}],
  itemSet: String,
  themes: [{ type: String }],
  hhaCategory: String,
  customizable: Boolean,
  customKits: String,
  buy: { price: Number, currency: String },
  sell: Number,
  variationNum: Number,
  variations:	[{variation: String, imageUrl: String, colors: [{type: String}]}],
}, {
  timestamps: true,
})

const Furniture = mongoose.model('Furniture', furnitureSchema)

export { Furniture }
