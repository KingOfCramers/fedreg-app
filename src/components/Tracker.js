import React from "react";
import { connect } from "react-redux";
import {
  startRemoveSetting,
  startAddSetting,
  startToggleSpecial,
  startToggleRules,
  startAddSearch
} from "../actions/settings";
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

  onSearch = ({ search }) => {
    this.props.startAddSearch({ search, id: this.props.id })
  }

  render(){
    return (
      <div>
        <div className={`tracker ${(this.state.info || this.state.description) ? "selected" : "unselected"}`}>
        <p className="tracker__title"><a target="_blank" href={this.props.url}>{this.props.department}</a></p>
        <div className="tracker__buttons">
          <button className="tracker__info" onClick={this.onShowDescription} className="button--secondary">Info</button>
          <button className="tracker__info" onClick={this.onShowSettings} className="button--third">Settings</button>
          <button className="tracker__remove" onClick={this.onRemove} className="button">Delete</button>
        </div>
        </div>
      <div className={this.state.info ? "showing" : "collapsed" }>
        <Toggle
          toggleVal={this.state.rules}
          title="All Filings"
          tooltipContent={"Enable 'All Filings' to recieve all types of documents filed in the federal register. Turn off to only recieve proposed or finalized rules."}
          toggleFunc={this.onRules}
        />
        <Toggle
          toggleVal={this.state.special}
          title="Special Collection"
          tooltipContent="Enable 'Special Collection' to recieve PDFs filed throughout the day. By disabling this feature, you will still recieve a zip file of regular filings at 9:00 a.m. EST."
          toggleFunc={this.onSpecial}
        />
        <Search
          id={this.props.id}
          title="Filter"
          tooltipContent="Search for phrases here to further narrow the results."
          search={["boy", "bag"]}
          onSearch={this.onSearch}
        />
      </div>
      <div className={`${this.state.description ? "showing" : "collapsed"}`}>
        <p className="tracker__information">{this.props.description}</p>
      </div>
      </div>
    )
  };
};

const mapDispatchToProps = (dispatch,props) => ({
  startRemoveSetting: (id) => dispatch(startRemoveSetting(id)),
  startToggleSpecial: ({ special, id }) => dispatch(startToggleSpecial({ special, id })),
  startToggleRules: ({ rules, id }) => dispatch(startToggleRules({ rules, id })),
  startAddSearch: ({ search, id }) => dispatch(startAddSearch({ search, id }))
})

export default connect(null, mapDispatchToProps)(Tracker);
