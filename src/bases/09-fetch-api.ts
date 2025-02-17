import { GIFResponsio } from "../interfaces/gif.responsio";


const apikey = 'OPnjP1OFDWOAqgR2luTGYzKSvihVsef4';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`)
  .then( resp => resp.json())
  .then( (body: GIFResponsio) => {
    console.log(body.data.images.downsized_still.url)
  })
  .catch( err => console.log( err) )