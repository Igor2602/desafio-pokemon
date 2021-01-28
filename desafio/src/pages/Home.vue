<template>
  <div class="wrapper-home">
    <b-container>
      <div class="home-header">
        <b-row>
          <b-col class="d-flex align-items-center justify-content-center mt-5">
            <img src="@/assets/images/pokemonLogo.png" alt="">
          </b-col>
        </b-row>
      </div>

      <div class="home-body">
        <div class="body-search">
          <b-row>
            <b-col class="d-flex align-items-center justify-content-center">
              <b-input-group class="mt-3">
                <template #append>
                  <b-input-group-text>Teste</b-input-group-text>
                </template>
                <b-form-input></b-form-input>
              </b-input-group>
            </b-col>            
          </b-row>
        </div>

      </div>

      <div class="home-footer">
        <b-row>
          <b-col class="d-flex align-items-center justify-content-start">
            <img src="@/assets/images/pikachu.png" alt="">
          </b-col>           

          <b-col class="d-flex align-items-center justify-content-end">
            <img src="@/assets/images/squirtle.png" alt="">
          </b-col>   
        </b-row>

        

      </div>
    </b-container>
  </div>
</template>

<script>
import PokemonRequest from '@/services/PokemonRequest'

export default {
  name: 'Home', 
  
  data () {
    return {
      cards: []
    }
  },

  created () {
    this.PokemonRequest = new PokemonRequest()
  },

  methods: {
    getPokemon () {
      this.PokemonRequest.getPokemon().then((response) =>{
        this.cards = response.card
        console.log(response.name)
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
      })
    }
  }
}
</script>


<style lang="scss" scoped>
  .wrapper-home {
    background-color: #f4dc26;
    min-height: 100vh;

    .home-header {
      img { 
        max-width: 400px;
      }
    }

    .home-body {
      height: 80vh;
      margin-top: 60px;

      .body-search {
        .input-group {
         input {
           border-radius: 12px 0 0 12px;
           outline: none;
           box-shadow: none;
           border: none;
         } 
        }
        .input-group-append {
          .input-group-text {
            border-radius: 0 12px 12px 0;
            outline: none;
            box-shadow: none;
            border: none;
            background-color: #fff;
          }
        }
      }
    }

    .home-footer {
      img {
        max-width: 300px;
      }
    }
  }
</style>