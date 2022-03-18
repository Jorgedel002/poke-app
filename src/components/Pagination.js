import React from "react";

import {Button} from "react-bootstrap"

import {BsChevronLeft, BsChevronRight} from "react-icons/bs"

function Pagination(props){

    const {onLeftClick, onRightClick, page, totalPages} = props;

    return(
        <div className="d-flex justify-content-center" style={{marginTop: "3rem"}}>
            <div className="d-flex align-items-center">
                <Button 
                 className="p-2" 
                 style={{marginRight: 10}}
                 onClick={onLeftClick}
                 >
                     <BsChevronLeft/>
                </Button>
                <div style={{fontSize: "1.2rem"}}>{page} de {totalPages}</div>
                <Button 
                 className="p-2" 
                 style={{marginLeft: 10}}
                 onClick={onRightClick}
                 >
                    <BsChevronRight/>
                </Button>
            </div>
        </div>
    )
}

export default Pagination;