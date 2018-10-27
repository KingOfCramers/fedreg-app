import React from 'react';
import { Link } from 'react-router-dom';
import Tracker from "./Tracker";
import { connect } from "react-redux";
import Selector from "./Selector";

export class DashboardPage extends React.Component {

  render(){
    return (
      <div className="content-container">
        <Selector className="selector"/>
        <div>
          {this.props.settings.map((data) => {
            return <Tracker key={data.department} {...data} />
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state,props) => ({
  settings: state.settings
});


export default connect(mapStateToProps, null)(DashboardPage)