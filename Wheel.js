import { useState, useEffect  } from "react";
import {Pictures} from "./Pictures.js";

import {SlArrowRight, SlArrowLeft} from 'react-icons/sl';

function Wheel(){
    const [current, setCurrent] = useState(0);
    const timeout=200;
    const length = Pictures.length;

    useEffect(() => {
        const slide= setTimeout(() => {
            setCurrent(current === length -1 ? 0 : current + 1) 
        },4000)
    })

    

    
  
    return(
        <div className="wheel">
        
        {Pictures.map((pic,index) => {
        return(
            <div className={index === current ? 'slide active' : 'slide'} key ={index}>
                {index === current && (<img src={pic.img} alt={pic.alt} className="image" />)}
            </ div>
        )
        })}
        
        
        
        </div>
    );
}
export default Wheel;