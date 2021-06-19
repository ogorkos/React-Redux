import React from 'react';
import {connect} from 'react-redux'
import {setPlusMinus} from './actions/index'
import './PlusMinus.css'

// Version - React Redux

const PlusMinus = ({num,setPlusMinus}) => {
   function dispatchAction(e) {
      const plusName = e.target.dataset.name
      setPlusMinus(num, plusName)
   }
   return(
      <div>
         
            <button className="btn plus" data-name='plus' onClick={dispatchAction}>+</button>
            <div className="wind">{num}</div>
            <button className="btn minus" data-name='minus' onClick={dispatchAction}>-</button>
   
      </div>
   )


}
export default connect(null, {setPlusMinus})(PlusMinus)