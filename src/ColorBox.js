import React, { Component } from 'react';
class ColorBox extends Component {
  render() {
    let limit = 0.2
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= limit? <ColorBox opacity={this.props.opacity - 0.1} />: null}
      </div>
    )
  }
}
export default ColorBox