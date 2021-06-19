import './App.css';
import HelloWord from './HelloWord'
// import { useState } from 'react';
import {store} from './store'
import ButtonName from './ButtonName'
import PlusMinus from './PlusMinus'
// const arr =[1,2,3,4]

// First  version
const App = () => {
  return (
    <div className="App">
      <h1>Redux</h1>
      <HelloWord name = {store.getState().name}/>
      <ButtonName names = {['Nir', 'Kostya', 'Alexey', 'Sammer', 'Dima']} />
      <PlusMinus/>
    </div>
  );
}
export default App;



// Second  version - React Redux
// import {connect} from 'react-redux'
// const App = ({name}) => {  
//   return (
//     <div className="App">
//       <h1>Redux</h1>
//       <HelloWord name = {name}/>
//       <ButtonName names = {['Nir', 'Kostya', 'Alexey', 'Sammer', 'Dima']} />
//       <PlusMinus/>
//     </div>
//   );
// }
// function mapStateToProps(state){
//   return {name:state.name}
// }
// export default connect(mapStateToProps,null)(App);
