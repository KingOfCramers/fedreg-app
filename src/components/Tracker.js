import React from "react";
import { connect } from "react-redux";
import { startRemoveSetting, startAddSetting, startToggleSpecial, startToggleRules } from "../actions/settings";
import ToggleButton from "react-toggle-button";
import Tooltip from 'react-tooltip-lite';
import Search from "./Search";
import Toggle from "./Toggle";

export class Tracker extends React.Component {
  state = {
    info: false,
    special: this.props.special,
    rules: this.props.rules,
    description: false,
    keyFig: this.props.keyFig,
    search: this.props.search
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
        <div className={`list-item ${(this.state.info || this.state.description) ? "selected" : "unselected"}`}>
        <p className="list-item__title"><a target="_blank" href={this.props.url}>{this.props.department}</a></p>
        <div className="list-item__button-container">
          <button className="list-item__info" onClick={this.onShowDescription} className="button--secondary">Info</button>
          <button className="list-item__info" onClick={this.onShowSettings} className="button--third">Settings</button>
          <button className="list-item__remove" onClick={this.onRemove} className="button">Delete</button>
        </div>
        </div>
      <div className={this.state.info ? "showing" : "collapsed" }>
        <Toggle
          toggleVal={this.state.rules }
          title="All Filings"
          tooltipContent="Enable 'All Filings' to recieve all types of documents filed in the federal register. Turn off to only recieve proposed or finalized rules."
          toggleFunc={this.onRules}
        />
          <div className="list-item__toggle">
            <div className="list-item__settings-title">Special Collection</div>
            <Tooltip content="Enable 'Special Collection' to recieve PDFs filed throughout the day. By disabling this feature, you will still recieve a zip file of regular filings at 9:00 a.m. EST." direction="up" arrow={true} id="custom-tip">
              <ToggleButton
                className="list-item__button"
                value={this.state.special}
                onToggle={(value) => {
                  this.setState((prevState) => ({ special: !value }));
                  this.onSpecial(!value);
              }}/>
            </Tooltip>
          </div>
          <Search id={this.props.id} disabled={!!this.props.search}/>
      </div>
      <div className={`${this.state.description ? "showing" : "collapsed"}`}>
        <p className="list-item__information">{this.props.description}</p>
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
