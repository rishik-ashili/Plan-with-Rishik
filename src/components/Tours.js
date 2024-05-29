import Card from './Card'
function Tours({tours, removeTour}) {    
    return (
        <div className='container'>
            <div>
                <h2 className='title'> Plan With Rishik</h2>
            </div>
            <div className='cards'>
                {// this shows mapping , every data from tours is mapped to individual card 
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                        //{...tour } is spread operator we are spreading all the data which was passed into tours
                        // we passed using use state into tours , then we are spreading the data 
                        // we have passed remove tour as we need to pass it on so that it can be later availabe to parent
                    } )
                }
            </div>
        </div>
    );
}

export default Tours;