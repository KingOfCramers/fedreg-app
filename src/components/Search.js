import React from "react";
import { connect } from "react-redux";
import { startAddSearch } from "../actions/settings";
import Tooltip from "react-tooltip-lite";
import Toggle from "./Toggle";

import CreatableSelect from 'react-select/lib/Creatable';

const components = {
  DropdownIndicator: null,
};

const createOption = (label: string) => ({
  label,
  value: label,
});

class CreatableInputOnly extends React.Component {
  constructor(props){
    super(props);
    let options = [];
    for (var x in props.vals){
      options.push({ value: props.vals[x], label: props.vals[x] });
    };
    this.state = {
      inputValue: '',
      value: options
    };
  }

  handleChange = (value: any, actionMeta: any) => {
    this.setState({ value });
  };

  handleInputChange = (inputValue: string) => {
    this.setState({ inputValue });
  };

  handleSearch = ({ value, inputValue }) => {
    this.setState({
      inputValue: '',
      value: [...value, createOption(inputValue)], // Eventually like to take this out...
    });
    this.props.onSearch({ inputValue });
  }

  handleKeyDown = (event: SyntheticKeyboardEvent<HTMLElement>) => {
    const { inputValue, value } = this.state;
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        this.handleSearch({
          value,
          inputValue
        });
        event.preventDefault();
    }
  };

  render() {
    const { inputValue, value } = this.state;
    return (
        <div className="search">
            <div className="search__title">Search</div>
            <Tooltip
              content={this.props.tooltipContent}
              direction="up"
              arrow={true}
              hoverDelay={400}
              distance={12}
              padding={"5px"}
              >
              <CreatableSelect
                className={"tags"}
                components={components}
                inputValue={inputValue}
                isMulti
                menuIsOpen={false}
                onChange={this.handleChange}
                onClear={()=> console.log("YAH")}
                onInputChange={this.handleInputChange}
                onKeyDown={this.handleKeyDown}
                placeholder="Add filters here..."
                value={value}
              />
            </Tooltip>
        </div>
    );
  }
}

module.exports = CreatableInputOnly;