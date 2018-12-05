import React from "react";
import { connect } from "react-redux";

class Filter extends React.Component {
  state = {
    value: ''
  };

  handleChange = (e) => {
    let value = e.target.value;
    if(value){
      document.getElementById("clear").style["display"] = "none";
      // document.getElementById("fetch").style["display"] = "none";

    } else {
      document.getElementById("clear").style["display"] = "inline-block";
     // document.getElementById("fetch").style["display"] = "inline-block";
    }
    this.setState({ value });
    this.props.handleFilter({ value });
  }

  render(){
  let content = this.props.items > 0 ? (
      <div
        className="filter"
        >
        <input
          id="search-input"
          type="text"
          placeholder="Search..."
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