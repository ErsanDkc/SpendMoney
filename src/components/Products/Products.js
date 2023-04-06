import React, { useState } from 'react'
import {data} from "../../Data/data"
import { useSelector,useDispatch } from 'react-redux';
import "./styles.css"
import { incereasePiece } from '../../redux/Money/moneySlice';
function Products() {
  const dispatch = useDispatch()
  
  return (
    <section>
      {
        data.map((item) => 
        <div key={item.id} className='card'>
          <div className="image">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="title">{item.title}</div>
          <div className="price">{item.price}</div>
          <div className="cardControl">
            <button className='red'>Sell</button>
            <input type="number" value={piece}  />
            <button className='green' >Buy</button>
          </div>

        </div>)
      }
    </section>
  ) 
}

export default Products