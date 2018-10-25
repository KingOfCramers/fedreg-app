import React from 'react';
import { Link } from 'react-router-dom';
import Tracker from "./Tracker";
import { connect } from "react-redux";
import Selector from "./Selector";

export class DashboardPage extends React.Component {

  onSubmit = (e) => {
    this.props.startAddSetting("BLOOP")
  }

  render(){
    return (
      <div>
        <Selector />
        <div>
          {this.props.settings.map((data) => <Tracker key={data.department} {...data} /> )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state,props) => ({
  settings: state.settings
});


export default connect(mapStateToProps, null)(DashboardPage)