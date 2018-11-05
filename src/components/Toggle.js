import React from "react";
import Tooltip from 'react-tooltip-lite';
import ToggleButton from "react-toggle-button";
import { connect } from "react-redux";

export class Toggle extends React.Component {
  state = {
    toggleVal: this.props.toggleVal
  }

  onToggle = (bool) => {
    this.props.toggleFunc(bool);
  }

  render(){
    return (
      <div className="list-item__toggle">
        <div className="list-item__settings-title">{this.props.title}</div>
        <Tooltip content={this.props.tooltipContent} direction="up" arrow={true} >
          <ToggleButton
            display="block"
            className="list-item__button"
            value={!this.state.toggleVal}
            onToggle={(value) => {
              this.setState({ toggleVal: value });
              this.onToggle(value);
          }}/>
        </Tooltip>
      </div>
    );
  }
}


module.exports = Toggle;