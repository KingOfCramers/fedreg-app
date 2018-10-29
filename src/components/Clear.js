import React from "react";
import { connect } from "react-redux";
import { startClearSettings } from "../actions/settings";

const Clear = (props) => (
  <div>
    { props.settings.length > 0 ?
    <button
      className="button--clear" onClick={props.startClearSettings}
    >Clear</button>
    : <div className="prompt">Add trackers to get started</div>}
  </div>
);

const mapDispatchToProps = (dispatch,props) => ({
  startClearSettings: () => dispatch(startClearSettings())
});

const mapStateToProps = (state,props) => ({
  settings: state.settings
})

export default connect(mapStateToProps, mapDispatchToProps)(Clear);