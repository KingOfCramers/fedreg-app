import React from "react";
import { connect } from "react-redux";
import { startRemoveSetting, startAddSetting } from "../actions/settings";

export class Tracker extends React.Component {

  onRemove = () => {
    this.props.startRemoveSetting({id: this.props.id})
  }

  render(){
    return (
      <div className="list-item">
        <p>{this.props.department}</p>
        <button onClick={this.onRemove} className="button">Remove</button>
      </div>
    )
  };
};

const mapDispatchToProps = (dispatch,props) => ({
  startRemoveSetting: (id) => dispatch(startRemoveSetting(id))
})

export default connect(null, mapDispatchToProps)(Tracker);
