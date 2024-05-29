import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";
import "./App.css";

const App = () => {

  const [tours, setTours] = useState(data);
  // data variable contains all the data inside daata.js , we initialised it to the usestate , 
  // it sends the data into tours 

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    // this means that we have applied a filter on tour and made a newtour obj which contains all the tours excepted those id given
    setTours(newTours);
  }

  if(tours.length === 0) {
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }

  return (
    <main>
    <div className="App">
      <div className="Rposition">
        {/* i have copied the same button herre , initially it would be placed at top most left of the page
        but i have used css properties, the class rposition we made it absolute so that i wont interfere with others then give it
         margin  */}
      <button className="btn-pp refresh-button" onClick={() => setTours(data)}>
            Refresh
          </button>
      </div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
      {/* we have also passed removetour as prop so that we can use it above */}
      {/* tours is a props */}
    </div>
    </main>
  )
};

export default App;
