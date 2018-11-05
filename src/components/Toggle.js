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
      <div className="toggle">
        <div className="toggle__title">{this.props.title}</div>
        <Tooltip
          content={this.props.tooltipContent}
          direction="up"
          arrow={true}
          hoverDelay={400}
          distance={12}
          padding={"5px"}
        >
          <ToggleButton
            display="block"
            className="tracker__button"
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