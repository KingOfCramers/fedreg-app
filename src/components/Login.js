import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import Footer from "./Footer";

export const Login = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Fed Tracker</h1>
      <button className="button--secondary" onClick={startLogin}>Login with Google</button>
    </div>
    <Footer />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})
export default connect(undefined, mapDispatchToProps)(Login);