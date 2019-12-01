import DefaultApi from './api/DefaultApi'
import Band from './model/Band'

let body = document.body
body.innerHTML += 'Calling the API...<br/>'

function handle(error, data, response) {
    body.innerHTML += 'Response code: ' + response.status + '<br/>'
    body.innerHTML += 'The bands we got back:'
    data.map(bandJSON => {
      const jsonText = JSON.stringify(bandJSON, null, 2) + '\n'
      body.innerHTML += '<hr/> <pre>' + jsonText + '</pre>'
    })
    body.innerHTML += '<hr/> Creating Band objects from the JSON...' + '<br/>'
    data.map(bandJSON => {
      const band = Band.constructFromObject(bandJSON)
      // Note use of dot notation to access elements, band is a class instance of Band
      body.innerHTML += 'Name of the band is ' + band.name + '<br/>'
    })
}

(new DefaultApi()).bands(handle)  // Calls the API passing above callback function



