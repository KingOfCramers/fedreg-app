import React from "react";
import { connect } from "react-redux";
import { startAddSearch } from "../actions/settings";

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
          <label>Search</label>
          <input name="search" onChange={this.handleChange} value={this.state.search} />
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch,props) => ({
  startAddSearch: ({ search, id }) => dispatch(startAddSearch({ search, id }))
});


module.exports = connect(null, mapDispatchToProps)(Search);