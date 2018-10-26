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
    this.props.startAddSetting({ department: selectedOption.value, description: selectedOption.description, url: selectedOption.url });
    this.setState({ selectedOption: null });
  }
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={allDepartments}
      />
    );
  }
}

const mapDispatchToProps = (dispatch,props) => ({
  startAddSetting: ({ department, description, url }) => dispatch(startAddSetting({ department, description, url }))
});

export default connect(null, mapDispatchToProps)(Selector);