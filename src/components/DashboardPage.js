import React from 'react';
import { Link } from 'react-router-dom';
import Tracker from "./Tracker";
import { connect } from "react-redux";
import Selector from "./Selector";
import Clear from "./Clear";
import Filter from "./Filter";
import Fetch from "./Fetch";

export class DashboardPage extends React.Component {

  onFilter = ({ value }) => {
    console.log(value)
    if(value != ""){
      this.props.settings.forEach(data => {
        let department = data.department.toLowerCase();
        if(!department.includes(value.toLowerCase())){
          document.getElementById(data.id).style["display"] = "none";
        } else {
          document.getElementById(data.id).style["display"] = "block";
        }
      })
    } else {
      this.props.settings.forEach(data => document.getElementById(data.id).style["display"] = "block")
    };
  }

  onFetch = () => {
    console.log(this.props.settings)
  }

  render(){
    return (
      <div className="content-container">
          <Selector className="selector" />
          <Clear />
          <Filter handleFilter={this.onFilter} />
            {this.props.settings.map((data) => {
              let search = [];
              for (var x in data.search){
                search.push({ id: x, value: data.search[x], label: data.search[x] })
              };
              return <Tracker className="tracker" cssId={data.id} key={data.department} {...data} search={[...search]}/>
            })}
            {/* <Fetch fetch={this.onFetch}/> */}
      </div>
    )
  }
}

const mapStateToProps = (state,props) => ({
  settings: state.settings
});


export default connect(mapStateToProps, null)(DashboardPage)