import React from "react";
import { useState } from "react";


import {InputGroup, FormControl, Button} from "react-bootstrap"

import {BsSearch} from "react-icons/bs"


function Search(props){

    const {onSearch} = props
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const onClick = async (e) => {
        onSearch(search)
    }

    return(
        <div className="d-flex justify-content-center">
            <InputGroup className="mb-3" style={{width: "35rem", marginTop: "1rem"}}>
                <FormControl
                 placeholder="Buscar Pokemon"
                 aria-label="Buscar Pokemon"
                 onChange={onChange}
                 aria-describedby="basic-addon2"
                />
                <Button 
                 id="basic-addon2"
                 style={{padding:"0px 9px"}}
                 onClick={onClick}
                >
                     <BsSearch/>
                </Button>
            </InputGroup>
        </div>
    )
}

export default Search;