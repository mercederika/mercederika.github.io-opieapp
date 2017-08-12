const PROTOCOL_STATIC = 'PROTOCOL_STATIC'
const PROTOCOL_DYNAMIC = 'PROTOCOL_DYNAMIC'
const PROTOCOL_TURN = 'PROTOCOL_TURN'

export function selectProtocol (option) {
  // console.log('option assesmentActions', option)
  return {
    type: PROTOCOL_ACTIVE,
    payload: option
  }
}

// export function protocolStatic (option, selected) {
//   return {
//     type: PROTOCOL_STATIC,
//     selected: true
//   }
// }
//
// export function protocolDynamic (option, selected) {
//   return {
//     type: PROTOCOL_DYNAMIC,
//     selected: true
//   }
// }
//
// export function protocolTurn (option, selected) {
//   return {
//     type: PROTOCOL_TURN,
//     selected: true
//   }
// }
//
// export function selectProtocol (option) {
//   return {
//     type: PROTOCOL_ACTIVE,
//     payload: option
//   }
// }
