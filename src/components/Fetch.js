import React from "react";

export class Fetch extends React.Component {
  render(){
    return (
      <div className="fetch">
        <button
          className="button--fetch"
          onClick={this.props.fetch}
        >Fetch</button>
      </div>
    )
  }
}

module.exports = Fetch;