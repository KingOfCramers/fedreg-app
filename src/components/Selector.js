import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { startAddSetting } from "../actions/settings";

import allDepartments from "../resources/allDepartments2.js";

class Selector extends React.Component {
  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    if(!selectedOption.group){
      this.props.startAddSetting({
        department: selectedOption.value,
        description: selectedOption.description,
        url: selectedOption.url
      });
      this.setState({ selectedOption: null });
    } else {

    }
  }

  render() {
    const customStyles = {
      control: (styles, { isDisabled }) => ({ ...styles, backgroundColor: 'white' }),
      option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return data.label == "Add Group" ? { ...styles, color: isFocused ? "white" : "#333333", backgroundColor: isDisabled ? null : isFocused ? "rgba(123,104,72,.6)" : "white", marginBottom: "2px", marginTop: "5px", textAlign: "center"  } : { ...styles };
      }
    };
    const { selectedOption } = this.state;
    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={allDepartments}
        styles={customStyles}
      />
    );
  }
}

const mapDispatchToProps = (dispatch,props) => ({
  startAddSetting: ({ department, description, url }) => dispatch(startAddSetting({ department, description, url }))
});

export default connect(null, mapDispatchToProps)(Selector);