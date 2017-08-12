import React from 'react'
import ReactDOM from 'react-dom'
require("./styles.css");
import NavContainer from './containers/NavContainer'
import CountContainer from './containers/CountContainer'
import TestContainer from './containers/TestContainer'
import IconBarContainer from './containers/IconBarContainer'
import TestResultsContainer from './containers/TestResultsContainer'
import IndividualResult from './components/IndividualResult/IndividualResult'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import App from './components/app'
import reducers from './reducers'

const store = createStore (reducers)

// console.log(store.getState())

class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
      tests: [
        {
          selectedProtocol: 'Static',
          walkingPace: 'Usual',
          verbalAssistance: 'No',
          assistiveDevice: 'None',
          isRunning: false,
          value: 90,
          id: 123
        },
        {
          selectedProtocol: 'Static',
          walkingPace: 'Usual',
          verbalAssistance: 'No',
          assistiveDevice: 'None',
          isRunning: false,
          value: 30,
          id: 124
        },
        {
          selectedProtocol: 'Static',
          walkingPace: 'Usual',
          verbalAssistance: 'No',
          assistiveDevice: 'None',
          isRunning: false,
          value: 60,
          id: 125
        }
      ]
    }


  }

  addTest = (test) => {
    let tests = this.state.tests.map((item) => item)
    tests.push(test)
    this.setState({tests: tests})
  }

  calculatedTestResults = (results) => {
    // Do stuff
  }

  deleteTest = (testId) => {
    // Do stuff
    let filteredTests = this.state.tests.filter((test) => {
      return test.id !== testId
    })
    this.setState({tests: filteredTests})
  }

  editTest = (testId) => {
    // Do state

  }

  render() {
    return (
      <div>
        <NavContainer />
        <CountContainer />
        <TestContainer addTest={this.addTest} numberOfTests={this.state.tests.length} />
        <IconBarContainer />
        <IndividualResult tests={this.state.tests} calculatedTestResults={this.calculatedTestResults} deleteTest={this.deleteTest} editTest={this.editTest} />
        <TestResultsContainer tests={this.state.tests} />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
   document.getElementById('app')
 )
