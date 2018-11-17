import React from "react";
import { connect } from "react-redux";

export class Fetch extends React.Component {
  render(){
    return (
      this.props.settings.length > 0 ? (
        <div className="fetch" id="fetch">
          <button
            className="button--fetch"
            onClick={this.props.fetch}
          >Fetch</button>
        </div>
      ) : (
        <div></div>
      )
    )
  }
}

const mapStateToProps = (state,props) => ({
  settings: state.settings
})

module.exports = connect(mapStateToProps, null)(Fetch);