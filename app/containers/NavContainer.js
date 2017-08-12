import React, { Component } from 'react'
import Nav from '../components/Nav/Nav'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { patientActions } from '../actions/patientActions'

class NavContainer extends Component {
  render () {
    return (
      <div>
        <Nav patient={this.props.patient}/>
      </div>
    )
  }
}

function mapStateToProps (state) {
  // console.log(state)
  return {
    patient: state.patient
  }
}

// function mapDispatchToProps (dispatch) {
//   return bindActionCreators ({patient: patient}, dispatch)
// }

export default connect (mapStateToProps)(NavContainer)
