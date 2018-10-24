import React from 'react';
import { Link } from 'react-router-dom';
import allDepartments from "../resources/allDepartments.js";
import Tracker from "./Tracker";
import { connect } from "react-redux";

export const DashboardPage = (props) => (
  <div>
    <input type="text"/>
    <div>
      {props.settings.map((data) => <Tracker key={data.id} {...data}/>)}
    </div>
  </div>
);

const mapStateToProps = (state,props) => ({
  settings: state.settings
});

export default connect(mapStateToProps, null)(DashboardPage)