import React from 'react'
import PropTypes from 'prop-types'

const Circle = (props) => {
  return (
      <div className='circle'>{props.label}</div>
  )
}

Circle.propTypes = {
  label: PropTypes.number.isRequired
}

const Count = (props) => {
  return (
    <div className='count-container'>
      <Circle label={1} />
      <div className='circle-line'></div>
      <Circle label={2} />
      <div className='circle-line'></div>
      <Circle label={3} />
    </div>
  )
}

export default Count
