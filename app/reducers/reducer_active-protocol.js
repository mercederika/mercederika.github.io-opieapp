const PROTOCOL_SELECTED = 'PROTOCOL_SELECTED'

export default function selectedProtocol (state = null, action) {
  switch (action.type) {
    case PROTOCOL_ACTIVE:
      return {
        ...state,
        selected: false
      }
  }
    return state;
}
