// add Comment component here
import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    // const {content} = this.props.commentText

    return (
      <div className="comment">
       {this.props.commentText}
      </div>
    )
  }
}
