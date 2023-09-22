import Card from "./Card"
import React from "react"

function Tours({tours,removeCard}){
    return(
        <div className="wrapper">
            <div><h1 className="heading">Plan With Ansh</h1></div>
            <div className="toursContainer">
            {
                tours.map( (tour) =>{
                    return <Card key={tour.id} {...tour} removeCard={removeCard}></Card>
                })
            }
            </div>
        </div>
        
    )
}

export default Tours