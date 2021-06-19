import React from 'react';
import { store } from './store';
import {setName} from './actions/index'

const ButtonName = ({names}) => {
   
   function dispatchBtnAction(e){
      const name = e.target.dataset.name
      console.log(name)
      store.dispatch(setName(name))
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

export default ButtonName