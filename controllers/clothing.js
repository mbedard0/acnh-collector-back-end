import axios from "axios";

function index(req, res) {
  axios.get(`https://api.nookipedia.com/nh/clothing`,
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
  index
}