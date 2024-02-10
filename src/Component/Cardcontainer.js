import Restaurantcard from "./Restaurantcard"
import data from "../utils/config"
const Cardcontainer = ()=>{
    const {imgURL , name ,rating , deliveryTime , cuisines, Location} = data[0];
    return(
        <div className=" container d-flex justify-content-between mt-4">
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} Location={Location}/>
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} Location={Location}/>
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} Location={Location}/>
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} Location={Location}/>
            <Restaurantcard url={imgURL} name={name} rating={rating} deliveryTime={deliveryTime} cuisines={cuisines} Location={Location}/> 
        </div>
    )
}

export default Cardcontainer