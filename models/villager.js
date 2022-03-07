import mongoose from 'mongoose'

const villagerSchema = new mongoose.Schema({
  name: String,
  url: String,
  imageUrl: String,
  species: String,
  personality: String,
  gender: String,
  birthdayMonth: String,
  birthdayDay: String,
  sign: String,
  quote: String,
  phrase: String,
  clothing: String,
  hobby: String,
  favStyles: [{ type: String }],
  houseExt: String,
  houseInt: String
},
  {
    timestamps: true,
  })

const Villager = mongoose.model('Villager', villagerSchema)

export { Villager }
