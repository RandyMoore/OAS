import DefaultApi from './api/DefaultApi'
import ApiClient from './ApiClient'
import Band from './model/Band'

let body = document.body
body.innerHTML += 'Calling the API...<br/>'

function handle(error, data, response) {
    body.innerHTML += 'Response code: ' + response.status + '<br/>'
    body.innerHTML += 'The bands we got back:'
    data.map(band => {
      const jsonText = JSON.stringify(band, null, 2) + '\n'
      body.innerHTML += '<hr/> <pre>' + jsonText + '</pre>'
    })
}

(new DefaultApi()).bands(handle)  // Calls the API passing above callback function




