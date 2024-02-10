import data from "../utils/config"
const Restaurantcard = ({url,name,rating,deliveryTime,cuisines,Location})=>{
    return(
        <div className="custom-card">
            <div>
                <img src={url} 
                alt="restroimg" 
                width="100%"
                style={{height:"150px",
                objectFit: "cover"}}/>
            </div>
            <p>{name}</p>
            <div className="d-flex justify-content-between">
                <p>{rating} /10</p>
                <p>{deliveryTime} mins</p>
            </div>
            <p>{cuisines}</p>
            <p>{Location}</p>
        </div>
    )
}

export default Restaurantcard