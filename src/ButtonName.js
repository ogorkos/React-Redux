import React from 'react';
// import { store } from './store';
import {setName} from './actions/index'
import {connect} from 'react-redux'

// Version - React Redux

const ButtonName = ({names, setName}) => {
   
   function dispatchBtnAction(e){
      const name = e.target.dataset.name
      console.log(name)
      setName(name)
   }
   return (
      <div>
         {names.map((name,i) => 
         <button key={i} data-name={name} onClick={dispatchBtnAction} 
            style={{margin:'6px', backgroundColor:'blue', color:'white', padding:'4px', width:'70px'}}>
             {name} </button>)}
      </div>
   )
}

export default connect(null, {setName})(ButtonName)

// connect(null, {setName})(ButtonName) - connect(data from store, {function })(name of component ButtonName)
// функция dispatchBtnAction должна быть выше return
