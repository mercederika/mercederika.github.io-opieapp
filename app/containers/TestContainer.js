import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Test from '../components/Test/Test'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as assessmentActions from '../actions/actions_assessment'

class TestContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedProtocol: 'Static',
      walkingPace: 'Usual',
      verbalAssistance: 'No',
      assistiveDevice: 'None',
      isRunning: false,
      value: 0,
      id: Date.now()
    }
  }

  updatedButtonChoice = (slug, newValue) => {
    this.setState({[slug]: newValue})
  }

  render () {
    return (
      <div>
        <Test
          {...this.state}
          updatedButtonChoice={this.updatedButtonChoice}
        />
      </div>
    )
  }
}

// <Test
//   items={this.props.assessmentOptions}
//   onProtocolClick={this.props.activeProtocol}
// />

// function mapStateToProps (state) {
//   // console.log('Test Container', state.activeProtocol)
//   return {
//     assessmentOptions: state.assessment.items,
//     activeProtocol: state.activeProtocol
//   }
// }
//
// function mapDispatchToProps (dispatch) {
//   return bindActionCreators (assessmentActions, dispatch)
// }
//
// export default connect (mapStateToProps, mapDispatchToProps)(TestContainer)

export default TestContainer
