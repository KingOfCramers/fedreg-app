import React from 'react';
import { Link } from 'react-router-dom';
import Tracker from "./Tracker";
import { connect } from "react-redux";
import Selector from "./Selector";
import Clear from "./Clear";

export class DashboardPage extends React.Component {

  render(){
    return (
      <div className="content-container">
        <Selector className="selector"/>
          {this.props.settings.map((data) => {

            return <Tracker key={data.department} {...data} keyFig="abc123"/>
          })}
        <Clear onClick={this.handleOpenModal} />
        <Selector className="selector"/>
          {this.props.settings.map((data) => {
            return <Tracker key={data.department} {...data} />
          })}
        <Clear onClick={this.handleOpenModal} />
      </div>
    )
  }
}

const mapStateToProps = (state,props) => ({
  settings: state.settings
});


export default connect(mapStateToProps, null)(DashboardPage)