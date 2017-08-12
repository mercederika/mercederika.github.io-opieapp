import React from 'react'
import PropTypes from 'prop-types'

const label = {
  label1: 'N.',
  label2: 'Average Speed (m / s)',
  label3: 'Max Speed (m / s)',
  label4: 'Total Time (seconds)'
}

const Label = (props) => {
  return (
    <div className='labelbar-container'>
      <div className='label'>{props.label}</div>
    </div>
  )
}

Label.propTypes = {
  label: PropTypes.string.isRequired
}

const LabelBar = (props) => {
    return (
      <div className='icon-bar label-bar'>
        <Label label={label.label1}/>
        <Label label={label.label2}/>
        <Label label={label.label3}/>
        <Label label={label.label4}/>
      </div>
    )
}

export default LabelBar
