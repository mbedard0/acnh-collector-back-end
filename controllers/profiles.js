import { Profile } from '../models/profile.js'
import { User } from '../models/user.js'

function index(req, res) {
  Profile.find({})
    .then(profiles => res.json(profiles))
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}

function getProfile(req, res) {
  User.findById(req.params.id)
    .then(user => {
      Profile.findById(user.profile)
        .populate('lists')
        .then(profile => {
          res.json(profile)
        })
    })
}

export { index, getProfile }
