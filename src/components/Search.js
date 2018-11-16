import React from "react";
import { startAddSearch } from "../actions/settings";
import Tooltip from "react-tooltip-lite";
import Toggle from "./Toggle";

import CreatableSelect from 'react-select/lib/Creatable';

const components = {
  DropdownIndicator: null,
};

class Search extends React.Component {
  state = {
      inputValue: '',
  };

  handleInputChange = (inputValue: string) => {
    this.setState({ inputValue });
  };

  handleDeletion = (items) => {
    // items is an array of items that should not be deleted...
    let filtered = this.props.search.filter((tag) => !items.includes(tag));
    if(filtered.length == 1){
      this.props.handleRemoveSearch({ searchId: filtered[0].id })
    } else {
      this.props.handleClearSearch();
    }
  };

  handleKeyDown = (event: SyntheticKeyboardEvent<HTMLElement>) => {
    const { inputValue } = this.state;
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        this.props.handleAddSearch({ inputValue });
        this.setState({ inputValue: "" });
        event.preventDefault();
    }
  };

  render() {
    const { inputValue } = this.state;
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
                onChange={this.handleDeletion}
                onInputChange={this.handleInputChange}
                onKeyDown={this.handleKeyDown}
                placeholder="Add filters here..."
                value={this.props.search} // List of terms...
              />
            </Tooltip>
        </div>
    );
  }
}

module.exports = Search;




