import React , {useState} from "react"

function Card({id,image,info,price,name,removeCard}){
  
    const [readMore , setSpan] = useState(false)
    const description = readMore ? info :  `${info.substring(0,180)}....`
    
    function setReadMore(){
        setSpan( !readMore )
    }

    return(
        <div className="card">
             <img src={image} className="image"></img>
             <div className="details">
                <h4 className="price">₹ {price}</h4>
                <h4 className="name">{name}</h4>
             </div>
             <div className="description">
                {description}
                 <span onClick={setReadMore} className="read">
                    { readMore ? "    Show Less" : "Read More"}
                 </span>
             </div>
             <button className="btn" onClick={()=>{
                removeCard(id)}}
                >Not Interested</button>
        </div>
    )
   
}


export default Card