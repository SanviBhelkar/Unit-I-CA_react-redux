// import React, {useDebugValue, useState} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { buycake } from "./cake/cakeActions";

// function CakeContainer(props){
//     const [number, setNumber] = useState(1)
//     const numOfCakes=useSelector(state => state.cake.numOfCakes)
//     const dispatch = useDispatch();
//     return(
//         <div>
//             <h2>Number Of Cakes:{numOfCakes}</h2>
//             <input type='text' value={number} onChange={e=> setNumber(e.target.value)}></input>
//             <button onClick={() => dispatch(buycake(number))}>Buy {number} Cake</button>
//         </div>
//     )
// }

// export default CakeContainer
import React,{useState} from "react"
import {connect} from  'react-redux'
import { buycake } from "./cake/cakeActions"

function CakeContainer(props){
    const [number, setNumber] =useState(1)
    return(
        <div>
            <h2>Number Of Cakes:{props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={() => props.buycake(number)}>Buy {number} Cakes</button>
        </div>
    )
}

const mapStateToProps =(state) =>{
    return{
        numOfCakes: state.cake.numOfCakes
    }
}
 
const mapDispatchToProps=(dispatch) =>{
    return{
        buycake:number => dispatch(buycake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)