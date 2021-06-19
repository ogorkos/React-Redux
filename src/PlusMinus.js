import React from 'react';
import { store } from './store';
import {setPlusMinus} from './actions/index'
import './PlusMinus.css'

const PlusMinus = () => {
   return(
      <div>
         
            <button className="btn plus" data-name='plus' onClick={dispatchAction}>+</button>
            <div className="wind">{store.getState().num}</div>
            <button className="btn minus" data-name='minus' onClick={dispatchAction}>-</button>
   
      </div>
   )
}

function dispatchAction(e) {
   const plusName = e.target.dataset.name
   console.log(setPlusMinus(store.getState().num, plusName));
   store.dispatch(setPlusMinus(store.getState().num, plusName))
}
export default PlusMinus