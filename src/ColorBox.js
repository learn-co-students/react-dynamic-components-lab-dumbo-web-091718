import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    return (
      <div className="color-box" style={{opacity: 2}}>
      {this.props.opacity >= 0.2 ? (
          <ColorBox opacity={this.props.opacity - 0.1} />
        ) : (
          null
        )}
      </div>
    )
  }

}






// {
//   for (let i = 1.9; i >= 0.2; i-=0.1){
//     <div className="color-box" style={{opacity: 2}}> </div>
//   }
//
// }
