import React from 'react'
import Stopwatch from './Stopwatch'
import Assessment from './Assessment'
import timer from '../timer'
import Title from '../Title'

// let OneSecondIncrementingTimer = timer(1000)(Stopwatch)

const Test = ({
  updatedButtonChoice,
  selectedProtocol,
  walkingPace,
  verbalAssistance,
  assistiveDevice}) => {
  // console.log('Test', props)
  // <OneSecondIncrementingTimer
  //
  // />

  return (
    <div>
      <Title title='Assessment'/>
      <div className='test-container'>
        <Stopwatch />
        <Assessment
          updatedButtonChoice={updatedButtonChoice}
          selectedProtocol={selectedProtocol}
          walkingPace={walkingPace}
          verbalAssistance={verbalAssistance}
          assistiveDevice={assistiveDevice}
        />
      </div>
  </div>
  )
}

export default Test
