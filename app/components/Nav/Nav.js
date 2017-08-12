import React from 'react'
import Patient from './Patient'
import TestInfo from './TestInfo'
import Reviewer from './Reviewer'

const Nav = (props) => {
  return (
    <div className='nav-container'>
      <ul className='nav'>
        <Patient
          name={props.patient.name}
          lastName={props.patient.lastName}
          sex={props.patient.sex}
          dob={props.patient.dob}/>
        <TestInfo />
        <Reviewer />
      </ul>
    </div>
  )
}

export default Nav
