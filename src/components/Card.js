import { useState } from "react";


function Card({id, image,info,price,name, removeTour})  {
    // we have passed props which we had in the data into card
    const[readmore,setReadmore] = useState(false);

    const [interested, setInterested] = useState(false);
   

    // at start it is false so wont be visiblr
    const description = readmore ? info :`${info.substring(0,200)}....`;
    // if readmore is true then it will show the whole info orelse 200 words limit
    //`${info.substring(0,200)}....` this is a string in which we have extracted substring of info and given it a range of 200 words.
    // we have added .... dots too 
    function readmoreHandler() {
        setReadmore(!readmore);
        // it will make readmore ture or false depending on the previous state
    }


    function interestedHandler() {
        setInterested(!interested);
      }

    return (
        
        <div className="card" style={{
            backgroundColor: interested? "#f2f2f2" : "",}}>

            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    {/* print the values price ND Name */}
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {/* we used an event handler as on clcik things are changing*/}
                        {readmore ? `Show Less`: `Read More`}
                        {/* if readmore is true show show less or show read more  */}
                    </span>
                </div>
            </div>
            <div className="possi">
            <button className="btn-red" onClick={() => removeTour(id)}>
                {/* on click is mapped to a function removetour with arrow fun as it would be executed on click */}
                Not Interested
            </button>
            <button className="btn-red btn-btn" onClick={interestedHandler} style={{
            backgroundColor: interested? "red" : "",}}>
                Interested
            </button>
            </div>
        </div>
        
    );
}

export default Card;