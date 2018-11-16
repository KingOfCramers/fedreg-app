import React from "react";
class Filter extends React.Component {
  state = {
    value: ''
  };

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({ value });
    this.props.handleFilter({ value });
  }

  render(){
  return (
  <div>
    <input
      type="text"
      value={this.state.value}
      onChange={this.handleChange}
    />
  </div>
);
  }
}

module.exports = Filter;