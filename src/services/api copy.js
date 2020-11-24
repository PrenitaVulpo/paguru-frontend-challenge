

const baseUrl='https://paguru-challenge.herokuapp.com/api/v1/'

export default function apiPost(url, sData) { 
  fetch(`${baseUrl}${url}`, {
  method: "POST", 
  headers: {
    'Content-Type': 'application/json'
  },
  body: sData
  }).then(response=> (console.log(response)))
  .catch(error=>console.log(error))

}
