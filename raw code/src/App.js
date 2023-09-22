import React , {useState} from "react";
import data from "./data"
import Tours from "./Tours";
const App = () => {
  const [tours , setTours] = useState(data)

  function removeCard(id){
    const newTours = tours.filter( tour => tour.id !== id)
    setTours(newTours)
  }
  if(tours.length===0){
    return(
      <div className="refresh">
        <h2>NO Tours Left</h2>
        <button onClick={()=>{
          setTours(data)
        }} className="refreshBtn">Refresh</button>
      </div>
    )
  }
  return (
    <div className="data">
      <Tours tours={tours} removeCard={removeCard}></Tours>
    </div>
  )
};

export default App;
