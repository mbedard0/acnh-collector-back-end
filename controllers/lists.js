import { List } from "../models/list.js"
import { Profile } from "../models/profile.js"

async function create(req, res) {
  try {
    // push list data to create list
    const newList = await List.create(req.body)
    const profile = await Profile.findById(req.body.creator)
    await profile.lists.push(newList._id)
    await profile.save()
    res.json(newList)
  } catch (e) {
    console.log(e)
  }
}

function index(req, res) {
  Profile.findById(req.params.id)
    .populate('lists')
    .then(profileInfo => {
      res.json(profileInfo.lists)
    })
}

export {
  create,
  index
}