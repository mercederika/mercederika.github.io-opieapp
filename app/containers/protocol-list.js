// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { selectProtocol } from '../actions/protocolActions'
//
// class ProtocolList extends Component {
//
//   renderList () {
//     return this.props.protocols.map(protocol => {
//       return (
//         <button
//           key={protocol.option}
//           className='button'
//           onClick={() => this.props.selectProtocol(protocol)}>
//           {protocol.option}
//         </button>
//       )
//     });
//   }
//
//   render () {
//     return (
//       <div>
//           {this.renderList()}
//       </div>
//     )
//   }
// }
//
// function mapStateToProps (state) {
//   // console.log(state)
//   return {
//     protocols: state.protocols,
//     selected: false
//   };
// }
//
// function mapDispatchToProps (dispatch) {
//   return bindActionCreators ({ selectProtocol: selectProtocol }, dispatch)
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(ProtocolList)
