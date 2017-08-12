// const PROTOCOL_STATIC = 'PROTOCOL_STATIC'
// const PROTOCOL_DYNAMIC = 'PROTOCOL_DYNAMIC'
// const PROTOCOL_TURN = 'PROTOCOL_TURN'


export function selectProtocol(option) {
  // console.log('option assesmentActions', option)
  return {
    type: PROTOCOL_ACTIVE,
    payload: option
  }
}


// export function protocolStatic (option, selected) {
//   return {
//     type: PROTOCOL_STATIC,
//     payload: option
//   }
// }
//
// export function protocolDynamic (option, selected) {
//   return {
//     type: PROTOCOL_DYNAMIC,
//     payload: option
//   }
// }
//
// export function protocolTurn (option, selected) {
//   return {
//     type: PROTOCOL_TURN,
//     payload: option
//   }
// }

// export function selectProtocol (option) {
//   console.log('select protocol', option)
//   return {
//     type: PROTOCOL_ACTIVE,
//     payload: option
//   }
// }
