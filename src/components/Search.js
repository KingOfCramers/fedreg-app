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

class Search extends React.Component {
  constructor(props){
    super(props);
    let options = [];
     for (var x in this.props.vals){
       options.push({ value: props.vals[x], label: props.vals[x], searchId: x });
    };
    this.state = {
      inputValue: '',
      value: options
    };
  }

  handleChange = (value: any, actionMeta: any) => {
    if(actionMeta.action == "remove-value"){
      this.props.onRemoveSearch({ searchId: actionMeta.removedValue.searchId })
    } else if (actionMeta.action == "clear"){
      this.props.onClearSearch();
    }
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

module.exports = Search;