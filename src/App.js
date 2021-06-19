import React from 'react'
import './App.css';
import HelloWord from './HelloWord'
// import {store} from './store'
import ButtonName from './ButtonName'
import PlusMinus from './PlusMinus'
import {connect} from 'react-redux'

// Version - React Redux

const App = ({name, num}) => {  
  return (
    <div className="App">
      <h1>React-Redux</h1>
      <ButtonName names = {['Nir', 'Kostya', 'Alexey', 'Sammer', 'Dima']}/>
      <HelloWord name = {name}/>
      <PlusMinus num = {num}/>
    </div>
  );
}
function mapStateToProps(state){
  return {
    name:state.name,
    num:state.num
  }
}
export default connect(mapStateToProps,null)(App);

//mapStateToProps считывает state и передает как props в компоненты с помощью функции connect
//connect связывает store с компонентой и содержит одно из двух значений: на первом месте функция которая считывает store и на втором функция в {} которая записывает данные в store. Во вторых скобках находится экспортируемая компонента 