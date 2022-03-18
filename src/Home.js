import { useState, useEffect } from "react";
import {URL_ALL_POKEMONS} from "./services/constants"
import { getPokemons, getPokemonData, searchPokemon } from "./services/api"
import "../src/App.css"

import PokemonCard from "./components/PokemonCard";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import Footer from "./components/Footer";

import { Container, Row, Spinner, Image, Button } from "react-bootstrap"

import PokeballImg from "../src/images/pokeball.png"

function Home() {

 const [pokemons, setPokemons] = useState([]);
 const [page, setPage] = useState(0)
 const [total, setTotal] = useState(0)
 const [loading, setLoading] = useState(true)
 const [notFound, setNotFound] = useState(false)
 const [result, setResult] = useState(false)

  const fetchPokemons = async () => {
    try{
      setLoading(true)
      const data = await getPokemons(20, 20 * page);
      const promises = data.results.map(async (pokemons) => {
        return await getPokemonData(pokemons.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotal(Math.ceil(data.count / 25))
      setNotFound(false)
      setResult(false)
    }catch(err){

    }
  }


  useEffect(() => {
    fetchPokemons();
  }, [page])


  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage)
  }

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage)
  }


  const onSearch = async (pokemons) => {
    if(!pokemons){
      return fetchPokemons()
    }
    const result = await searchPokemon(pokemons);
    if(!result){
      setNotFound(true);
      return;
    }else{
      setPokemons([result]);
      setNotFound(false)
      setPage(0)
      setTotal(1)
      setResult(true)
    }
  }

  const back = () => {
   
      return fetchPokemons()
    
  }

  return (
    <div>
      <Container>
        <div className="d-flex justify-content-center mobile-logo" style={{margin: "1rem"}}>
          <Image src={PokeballImg} style={{width: "50px"}}/>
          <h1 style={{marginLeft: ".4rem"}}>Poke-App</h1>
        </div>
        <Search
        onSearch={onSearch}
        />
        {
          notFound || result ? (
            <div className="d-flex justify-content-center" style={{marginTop: "3rem"}}>
              <Button
              variant="primary"
              onClick={() => back()}
              >
                Volver
              </Button>
            </div>
          ) :
          <Pagination
          page={page + 1}
          totalPages={total + 1}
          onLeftClick={lastPage}
          onRightClick={nextPage}
          />
        }
        
        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : notFound ? <div className="d-flex justify-content-center not-found" style={{height: "50vh"}}>El Pokemon No existe</div> : (
          <div style={{margin: "2rem 0 5rem"}}>
          <Row className="justify-content-center">
            {pokemons.map((pokemons, index) => {
              return(
                <PokemonCard 
                  pokemons={pokemons} 
                  key={index}
                  />
              )
            })}
          </Row> 
        </div>
        )
        }
      </Container>
  
        <Footer/>
      
    </div>
  )
}

export default Home;