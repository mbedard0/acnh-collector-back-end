import mongoose from 'mongoose'

const interiorItemSchema = new mongoose.Schema({
  url:	String,
  imageUrl:	String,
  name:	String,
  category:	String,
  itemSeries:	String,
  itemSet:	String,
  themes:	[{type: String}],
  hhaCategory:	String,
  tag:	String,
  buy:	{price: Number, currency: String},
  sell:	Number,
  colors:	[{type: String}],
  availability:	String,
  width:	Number,
  length:	Number,
  height:	Number
}, {
  timestamps: true,
})

const InteriorItem = mongoose.model('InteriorItem', interiorItemSchema)

export { InteriorItem }
