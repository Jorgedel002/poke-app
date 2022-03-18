import { Card,ListGroup,ListGroupItem,Row,Col, Container, Button} from "react-bootstrap"

import "../App.css"

function PokemonCard(props){

   const borderTypeColor = {
     electric: "#F3FF00",
     normal: "#C1C1C1",
     fire: "#DE0000",
     water: "#0059CA",
     ice: "#3B91FF",
     rock: "#8C5B00",
     flying: "#38FFF3",
     grass: "#04FF00",
     psychic: "#C900ED",
     ghost: "#75008A",
     bug: "#64FF00",
     poison: "#3C0084",
     ground: "#4F3200",
     dark: "#292929",
     fairy: "#FF3EEB",
     fighting: "#FF8938",
     dragon: "#C321FF",
     steel: "#414141",
   }

   const typeColor = {
    electric: "#F8FF72",
    normal: "#E1E1E1",
    fire: "#FF5353",
    water: "#5BA3FF",
    ice: "#84BAFF",
    rock: "#E6A939",
    flying: "#ABFFFA",
    grass: "#7FFF7D",
    psychic: "#E867FF",
    ghost: "#E161F8",
    bug: "#B3FF82",
    poison: "#B87DFF",
    ground: "#D5A85A",
    dark: "#737373",
    fairy: "#FF90F3",
    fighting: "#FFB888",
    dragon: "#DA77FF",
    steel: "#C0C0C0",
  }
   
    
    let {pokemons, index} = props;

    return(
      
          <Col lg="auto" md="auto" xl="auto" xs="auto" sm="auto">
              <Card style={{ width: '14rem', margin: ".5rem"}}>
                  <Card.Header key={index}>
                    <span className="pokemon-order">#{pokemons.order}</span> 
                    <span className="pokemon-name">{pokemons.name}</span>
                  </Card.Header>
                  <Card.Img variant="top" src={pokemons.sprites.front_default} />
                  <ListGroup className="list-group-flush">
                    {pokemons.stats.map((stat, index) => {
                      return (
                        <ListGroupItem>
                          <span className="stat-name">{stat.stat.name}:</span> 
                          <span className="stat-base_stat">{stat.base_stat}</span>
                        </ListGroupItem>
                      )
                        
                    })}
                  </ListGroup>
                  <Card.Footer className="d-flex">
                    {pokemons.types.map((type, index) => {
                      return <div key={index} className="type-container" style={{marginRight: "1rem", backgroundColor: typeColor[type.type.name], borderColor: borderTypeColor[type.type.name]}} > <p className="type">{type.type.name}</p></div>
                    })}
                  </Card.Footer>
            </Card>
          </Col>
     
    )
}

export default PokemonCard;