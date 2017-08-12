const PROTOCOL_STATIC = 'PROTOCOL_STATIC'
const PROTOCOL_DYNAMIC = 'PROTOCOL_DYNAMIC'
const PROTOCOL_TURN = 'PROTOCOL_TURN'

export function protocolStatic (staticOption) {
  return {
    type: PROTOCOL_STATIC,
    staticOption: false
  }
}

export function protocolDynamic (dynamic) {
  return {
  type: PROTOCOL_DYNAMIC,
  dynamic: false
  }
}

export function protocolTurn (turn) {
  return {
  type: PROTOCOL_TURN,
  turn: false
  }
}

const initialState = {
  staticOption: false,
  dynamic: false,
  turn: false,
}

export function activeProtocol (option) {
  console.log('Potocol has been selected:', option.label)
  return {
    type: PROTOCOL_SELECTED,
    payload: option
  }
}

export default function protocol (state = initialState, action) {
  switch (action.type) {
    case PROTOCOL_STATIC:
      return {
        ...state,
        staticOption: true,
        dynamic: false,
        turn: false
      }
    case PROTOCOL_DYNAMIC:
      return {
        ...state,
        staticOption: false,
        dynamic: true,
        turn: false
      }
    case PROTOCOL_TURN:
      return {
        ...state,
        staticOption: false,
        dynamic: false,
        turn: true
      }
    default:
      return state
  }
}
