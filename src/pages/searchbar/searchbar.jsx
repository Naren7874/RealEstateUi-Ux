
import { useState } from 'react'
import './searchbar.scss'
import {useNavigate} from "react-router-dom"
const Searchbar = () => {
    const navigate = useNavigate();
    function switchType(s){
       const val =  document.querySelectorAll(".buy_rent");
       if(s === "buy"){
           val[0].style.backgroundColor = "black";
           val[0].style.color = "white";
           val[1].style.backgroundColor = "white";
           val[1].style.color = "black";

       }
       else{
           val[1].style.backgroundColor = "black";
           val[1].style.color = "white";
           val[0].style.backgroundColor = "white";
           val[0].style.color = "black";
       }
       
    }
    const handleclick = () =>{
        navigate("/list");
    }
  return (
    <div className='searchbar'>
        <div className="options">
            <button onClick={() => switchType("buy")} className='buy_rent'>Buy</button>
            <button onClick={() => switchType("rent")} className='buy_rent'>Rent</button>
        </div>
        <div className="search">
            <input type="text" name="" id="" placeholder='City Location'/>
            <input type="number" name="minPrice" max={0} min={100} id="" placeholder='Min Price'/>
            <input type="number" name="maxPrice" id="" max={10000000} min={0} placeholder='Max Price'/>
            <button onClick={handleclick}>
                <img src="/search.png" alt="" />
            </button>

        </div>
    </div>
  )
}

export default Searchbar