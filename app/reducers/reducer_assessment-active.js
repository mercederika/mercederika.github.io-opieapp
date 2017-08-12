const PROTOCOL_STATIC = 'PROTOCOL_STATIC'
const PROTOCOL_DYNAMIC = 'PROTOCOL_DYNAMIC'
const PROTOCOL_TURN = 'PROTOCOL_TURN'
const PROTOCOL_ACTIVE = 'PROTOCOL_ACTIVE'

const intitialState = {
  staticOp: false,
  dynamicOp: false,
  turnOp: false
}

export default function activeProtocol ( state = intitialState, action) {
  // console.log('action', action.type, 'state', state)
  switch (action.type) {
    case PROTOCOL_ACTIVE:
      return {
        ...state,
        payload: option
      }
    default:
      return state
  }
}

// export default function protocol (state = intitialState, action) {
//   console.log('protocol switch', action)
//   switch (action.type) {
//     case PROTOCOL_STATIC:
//       return {
//         ...state,
//         staticOp: true,
//         dynamic:  false,
//         turnOp: false
//       }
//     case PROTOCOL_DYNAMIC:
//       return {
//         ...state,
//         staticOp: false,
//         dynamic:  true,
//         turnOp: false
//       }
//     case PROTOCOL_TURN:
//       return {
//         ...state,
//         staticOp: false,
//         dynamic:  false,
//         turnOp: true
//       }
//     default:
//       return state
//   }
// }
