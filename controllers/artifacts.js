import axios from "axios";

function indexFossils(req, res) {
  axios.get(`https://api.nookipedia.com/nh/fossils/individuals`,
    {
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

function indexArt(req, res) {
  axios.get(`https://api.nookipedia.com/nh/art`,
    {
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
  indexFossils,
  indexArt
}