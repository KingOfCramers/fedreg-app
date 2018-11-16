import React from "react";
import { connect } from "react-redux";

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
  let content = this.props.items > 0 ? (
      <div
        className="trackerFilter"
        >
        <input
          type="text"
          placeholder="search..."
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    ) : <div></div>
    return content;
  }
}

const mapStateToProps = (state,props) => ({
  items: state.settings.length
});

module.exports = connect(mapStateToProps, null)(Filter);