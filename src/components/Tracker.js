import React from "react";
import { connect } from "react-redux";
import { startRemoveSetting, startAddSetting, startToggleSpecial, startToggleRules } from "../actions/settings";
import ToggleButton from "react-toggle-button";

export class Tracker extends React.Component {
  state = {
    info: false,
    toggle: this.props.special,
    rules: this.props.rules
  }

  onRemove = () => {
    this.props.startRemoveSetting({id: this.props.id})
  }

  onShow = () => {
    this.setState((prevState) => ({ info: !prevState.info }));
  }

  onSpecial = (bool) => {
    this.props.startToggleSpecial({ special: bool, id: this.props.id })
  }

  onRules = (bool) => {
    this.props.startToggleRules({ rules: bool, id: this.props.id })
  }

  render(){
    return (
      <div>
        <div className={`list-item ${this.state.info ? "selected" : "unselected"}`}>
        <p className="list-item__title"><a href={this.props.url}>{this.props.department}</a></p>
        <button className="list-item__info" onClick={this.onShow} className="button--secondary">{this.state.info ? "Hide" : "Info"}</button>
        <button className="list-item__remove" onClick={this.onRemove} className="button">Remove</button>
        </div>
      <div className={this.state.info ? "showing" : "collapsed" }>
        <div className="list-item__settings">
          <div className="list-item__settings-toggle">
            <p className="list-item__settings-title">Special Collection</p>
            <ToggleButton
              className="list-item__settings-button"
              value={this.state.toggle}
              onToggle={(value) => {
                this.setState((prevState) => ({ toggle: !value }));
                this.onSpecial(!value);
            }}/>
            <p className="list-item__settings-description">Enable special collection to recieve real-time updates whenever a "special filing" is made for {this.props.department}. If this feature is disabled you will still recieve the files at 5:00 p.m.</p>
          </div>
        </div>
        <div className="list-item__settings">
          <div className="list-item__settings-toggle">
            <p className="list-item__settings-title">Rules Only</p>
            <ToggleButton
              className="list-item__settings-button"
              value={this.state.rules}
              onToggle={(value) => {
                this.setState((prevState) => ({ rules: !value }));
                this.onRules(!value);
            }}/>
            <p className="list-item__settings-description">Enable special collection to recieve real-time updates whenever a "special filing" is made for {this.props.department}. If this feature is disabled you will still recieve the files at 5:00 p.m.</p>
          </div>
        </div>
        <div className="list-item__settings">
          <p className="list-item__settings-description">{this.props.description}</p>
        </div>
      </div>
      </div>
    )
  };
};

const mapDispatchToProps = (dispatch,props) => ({
  startRemoveSetting: (id) => dispatch(startRemoveSetting(id)),
  startToggleSpecial: ({ special, id }) => dispatch(startToggleSpecial({ special, id })),
  startToggleRules: ({ rules, id }) => dispatch(startToggleRules({ rules, id }))
})

export default connect(null, mapDispatchToProps)(Tracker);
