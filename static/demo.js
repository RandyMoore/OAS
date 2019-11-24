import DefaultApi from './api/DefaultApi'
import ApiClient from './ApiClient'

console.log(ApiClient.instance)
console.log((new DefaultApi()).bands())
