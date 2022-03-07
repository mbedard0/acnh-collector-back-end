import mongoose from 'mongoose'

const clothingSchema = new mongoose.Schema({
  url:	String,
  category:	String,
  sell:	Number,
  variationTotal:	Number,
  labelThemes:	[{type: String}],
  styles:	[{type: String}],
  availability:	String,
  buy:	{price: Number, currency: String},
  variations:	[{variation: String, imageUrl: String, colors: [{type: String}]}]},
  {
    timestamps: true,
  })

const Clothing = mongoose.model('Clothing', clothingSchema)

export { Clothing }
