import React, { useState } from 'react'
import {data} from "../../Data/data"
import { useSelector,useDispatch } from 'react-redux';
import "./styles.css"
import { incereasePiece } from '../../redux/Money/moneySlice';
function Products() {
  const dispatch = useDispatch()
  const [piece,setPiece] = useState(0)
  const buyItem = (amount,price,title) => {
    dispatch(incereasePiece({amount,price,title}))
  }
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
            <input type="number" value={piece}  onChange={(e) => setPiece(e.target.value)} />
            <button className='green' onClick={() => buyItem(1,item.price,item.title)}>Buy</button>
          </div>

        </div>)
      }
    </section>
  ) 
}

export default Products