import { combineReducers } from 'redux'
// import ProtocolsReducer from './reducer_protocols'
import Assessment from './reducer_assessment'
import Patient from './patient'
import ActiveProtocol from './reducer_assessment-active'

// console.log(ActiveProtocol)

const rootReducer = combineReducers ({
  assessment: Assessment,
  patient: Patient,
  activeProtocol: ActiveProtocol
})

export default rootReducer
