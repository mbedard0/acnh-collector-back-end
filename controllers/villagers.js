import axios from 'axios'

function index(req, res) {
  // make api call here
  axios.get(`https://api.nookipedia.com/villagers`,
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

export { index }