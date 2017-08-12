import React from 'react'
import ReactDOM from 'react-dom'

const Timer = (props) => {
  var play = <i className="material-icons">play_arrow</i>
  var stop = <i className="material-icons">stop</i>

  return (
    <div className='stopwatch-item'>
      <div className='stopwatch timer'>
        <div className='test-label'>Timer: ( min / sec )</div>
        <div className='test-stat'> 02:34 </div>
      </div>
      <div className='stopwatch-btns'>
        <button className='stopwatch-button play'>{play}</button>
        <button className='stopwatch-button stop'>{stop}</button>
      </div>
    </div>
  )
}

const StopwatchStat = (props) => {
  return (
    <div className='stopwatch-item'>
      <div className=''>
        <div className='test-label'>Avg Speed ( m / sec )</div>
        <div className='test-stat'> 02:34 </div>
      </div>
      <div className=''>
        <div className='test-label'>% Improved : Baseline</div>
        <div className='test-stat'> 2% </div>
      </div>
    </div>
  )
}

// const Reset = (props) => {
//   var reset = <i className="material-icons">replay</i>
//   return (
//     <div className='stopwatch-item'>
//       <div className='test-reset'>Reset Timer</div>
//       <div><button className='stopwatch-button reset'>{reset}</button></div>
//     </div>
//   )
// }

const Stopwatch = ({timer}) => {
  return (
    <div className='stopwatch-container'>
      <Timer />
      <StopwatchStat />
    </div>
  )
}

export default Stopwatch
