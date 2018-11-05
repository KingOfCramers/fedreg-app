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
  state = {
    inputValue: '',
    value: []
  };

  handleChange = (value: any, actionMeta: any) => {
    this.setState({ value });
  };

  handleInputChange = (inputValue: string) => {
    this.setState({ inputValue });
  };

  handleSearch = ({ value }) => {
    this.props.onSearch({ value });
  }

  handleKeyDown = (event: SyntheticKeyboardEvent<HTMLElement>) => {
    const { inputValue, value } = this.state;
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        this.setState({
          inputValue: '',
          value: [...value, createOption(inputValue)],
        });
        this.handleSearch({ search: inputValue });
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
                isClearable
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

module.exports = CreatableInputOnly;
/*
class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({search: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.startAddSearch({search: this.state.search, id: this.props.id });
  }

  render(){
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Filter</label>
          <input name="search" onChange={this.handleChange} value={this.state.search} disabled={this.props.disabled} />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch,props) => ({
  startAddSearch: ({ search, id }) => dispatch(startAddSearch({ search, id }))
});


module.exports = connect(null, mapDispatchToProps)(Search);*/