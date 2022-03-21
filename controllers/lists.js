import { List } from "../models/list.js"
import { Profile } from "../models/profile.js"

async function create(req, res) {
  try {
    console.log(req.body)
    const newList = await List.create(req.body)
    const profile = await Profile.findById(req)
    // push list data to create list
    // find profile of user and add that list id to the profile
  } catch(e) {
    console.log(e)
  }
}

export { 
  create, 
}