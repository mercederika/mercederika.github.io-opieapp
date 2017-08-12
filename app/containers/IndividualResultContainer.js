import React, { Component} from 'react'
import IndividualResult from '../components/IndividualResult/IndividualResult'

 class IndividualResultContainer extends Component {
  render () {
    return (
      <IndividualResult tests={this.props.tests} calculatedTestResults={this.props.calculatedTestResults} deleteTest={this.props.deleteTest} editTest={this.props.editTest} />
    )
  }
}

export default IndividualResultContainer
