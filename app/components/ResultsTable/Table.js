import React from 'react'
import PropTypes from 'prop-types'

const label = {
  top: {
    label1: 'Result',
    label2: 'Baseline',
    label3: '%Improved'
  },
  side: {
    label1: 'Average Speed ( m / s )',
    label2: 'Max Speed ( m / s )',
    label3: 'Total Time ( seconds )'
  }
}

const TopLabel = (props) => {
  return (
    <div className='result-row'>
      <div className='result-label'></div>
      <div className='result-item'>{label.top.label1}</div>
      <div className='result-item'>{label.top.label2}</div>
      <div className='result-item'>{label.top.label3}</div>
    </div>
  )
}

// TopLabel.propTypes = {
//   label: PropTypes.string.isRequired
// }

const Result = (props) => {
  return (
    <div className='result-row'>
      <div className='result-label'>Average results</div>
      <div className='result-item'>--</div>
      <div className='result-item'>--</div>
      <div className='result-item'>--</div>
    </div>
  )
}

const Table = (props) => {
  return (
    <div className='result-table'>
      <TopLabel />
      <Result />
      <Result />
      <Result />
    </div>
  )
}

export default Table
