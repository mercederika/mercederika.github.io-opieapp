import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Patient = (props) => {
  return (
    <li className='nav-patient'>
      <div><strong>{props.name} {props.lastName}</strong></div>
      <div>{props.sex}</div>
      <div>DOB: {props.dob}</div>
    </li>
    )
}

Patient.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired
}

export default Patient
