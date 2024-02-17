import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyicecream } from "./iceCream/iceCreamActions";;

function IceCreamContainer(props){
    const numOfIceCreams=useSelector(state => state.icecream.numOfIceCreams)
    const dispatch = useDispatch();
    return(
        <div>
            <h2>Number Of Ice Creams:{numOfIceCreams}</h2>
            <button onClick={() => dispatch(buyicecream())}>Buy Ice Cream</button>
        </div>
    )
}

export default IceCreamContainer