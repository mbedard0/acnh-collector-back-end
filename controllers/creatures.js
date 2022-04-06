import axios from "axios"

function indexFish(req, res) {
  axios.get(`https://api.nookipedia.com/nh/fish`,
    {
      params: {
        'game': 'NH'
      },
      headers: {
        'X-API-KEY': process.env.API_KEY,
        'Accept-Version': '1.0.0'
      }
    })
    .then(response => {
      res.json(response.data)
    })
    .catch(e => console.log(e))
}

function indexBugs(req, res) {
  axios.get(`https://api.nookipedia.com/nh/bugs`,
    {
      params: {
        'game': 'NH'
      },
      headers: {
        'X-API-KEY': process.env.API_KEY,
        'Accept-Version': '1.0.0'
      }
    })
    .then(response => {
      res.json(response.data)
    })
    .catch(e => console.log(e))
}

function indexSea(req, res) {
  axios.get(`https://api.nookipedia.com/nh/sea`,
    {
      params: {
        'game': 'NH'
      },
      headers: {
        'X-API-KEY': process.env.API_KEY,
        'Accept-Version': '1.0.0'
      }
    })
    .then(response => {
      res.json(response.data)
    })
    .catch(e => console.log(e))
}


export { 
  indexFish, 
  indexBugs, 
  indexSea 
}