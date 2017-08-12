import React, { Component } from  'react'
import CopyToClipboard from 'react-copy-to-clipboard'

export default class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      copied: false
    };
  }

  getInitialState = () => {
    return {value: '', copied: false};
  }

  onChange = ({target: {value}}) =>  {
    this.setState({value, copied: false});
  }

  onCopy = () => {
    this.setState({copied: true});
  }

  render() {
    return (
      <div className='text-container'>
        <div className='option text-area'>
          <strong className='option-title'>Test Result Statement</strong>
          {this.state.copied ? <span >Copied.</span> : null}
        </div>
        <textarea
          value={this.state.value}
          onChange={this.onChange}
          placeholder='Write your note here...'></textarea>
        <CopyToClipboard
          text={this.state.value}
          onCopy={this.onCopy}>
          <div className='copy'>
            <i className="material-icons">content_paste</i>
          </div>
        </CopyToClipboard>
      </div>
    )
  }
}
