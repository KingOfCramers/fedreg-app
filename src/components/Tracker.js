import React from "react";
import { connect } from "react-redux";
import { startRemoveSetting, startAddSetting } from "../actions/settings";

export class Tracker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      info: false
    }
  }

  onRemove = () => {
    this.props.startRemoveSetting({id: this.props.id})
  }

  onShow = () => {
    this.setState((prevState) => ({ info: !prevState.info }));
    console.log(this.state)
  }

  render(){
    return (
      <div>
      <div className="list-item">
        <p className="list-item__title"><a href={this.props.url}>{this.props.department}</a></p>
        {/*<img src="/images/info.png" className="list-item__info"/>*/}
        <button className="list-item__info" onClick={this.onShow} className="button--secondary">{this.state.info ? "Hide" : "Info"}</button>
        <button className="list-item__remove" onClick={this.onRemove} className="button">Remove</button>
      </div>
        <p className="list-item__description">{this.state.info ? this.props.description : ""}</p>
      </div>
    )
  };
};

const mapDispatchToProps = (dispatch,props) => ({
  startRemoveSetting: (id) => dispatch(startRemoveSetting(id))
})

export default connect(null, mapDispatchToProps)(Tracker);
