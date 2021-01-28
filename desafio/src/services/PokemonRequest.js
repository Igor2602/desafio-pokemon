import axios from 'axios'

export default class PokemonRequest {
  getPokemon () {
    const request = axios.get('https://api.pokemontcg.io/v1/cards')
      .then((response) => response)
      .catch((e) => {
        throw e
      }).finally(() => {

      })
    return request 
  }  
}