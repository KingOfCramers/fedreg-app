import React from "react";
import { connect } from "react-redux";
import { startRemoveSetting, startAddSetting, startToggleSpecial, startToggleRules } from "../actions/settings";
import ToggleButton from "react-toggle-button";

export class Tracker extends React.Component {
  state = {
    info: false,
    special: this.props.special,
    rules: this.props.rules,
    description: false
  }

  onShowDescription = () => {
    this.setState((prevState) => ({ description: !prevState.description }));
  }

  onRemove = () => {
    this.props.startRemoveSetting({id: this.props.id})
  }

  onShowSettings = () => {
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
        <div className="list-item__button-container">
          <button className="list-item__info" onClick={this.onShowDescription} className="button--secondary">Info</button>
          <button className="list-item__info" onClick={this.onShowSettings} className="button--third">{this.state.info ? "Hide" : "Settings"}</button>
          <button className="list-item__remove" onClick={this.onRemove} className="button">Delete</button>
        </div>
        </div>
      <div className={this.state.info ? "showing" : "collapsed" }>
        <div className="list-item__settings">
          <div className="list-item__settings-toggle">
            <p className="list-item__settings-title">Special Collection</p>
            <ToggleButton
              className="list-item__settings-button"
              value={this.state.special}
              onToggle={(value) => {
                this.setState((prevState) => ({ special: !value }));
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
      </div>
      <div className={`list-item ${this.state.description ? "showing" : "collapsed"}`}>
        <p className="list-item__settings-description">{this.props.description}</p>
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
