import React, { Component, Fragment} from 'react';
import Exercises from './Components/Exercises/index'

import {Header, Footer} from './Components/Layouts/index';
import './App.css';
import {muscles, exercises} from './customStore';

class App extends Component {
  state = {
    exercises  
  }

  getExercisesByMuscles() {
    return  this.state.exercises.reduce((exercises,exercise)=> {
      const {muscles} =exercise
      console.log(exercises);
      console.log("1");
      exercises[muscles] = exercises[muscles]
      ? [...exercises[muscles], exercise]
      : [exercise]
      
      return exercises
    }, {})    
  }

  render() {
    console.log(this.getExercisesByMuscles());
    return (
      <Fragment>
          <Header/>
          <Exercises/>
          <Footer muscles ={muscles}/>
      </Fragment>
    );
  }
    
}

export default App;
