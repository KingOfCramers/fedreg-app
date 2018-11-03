import React from "react";
import Emoji from "./Emoji";
import { connect } from "react-redux";

class Footer extends React.Component {
  render(props){
    if(this.props.settings.length == 0){
      return (
        <div>
          <footer className="footer">
               <p>Powered by React, Node, Firebase, and <Emoji symbol="💖" label="love" /></p>
          </footer>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

const mapStateToProps = (state,props) => ({
  settings: state.settings
});

module.exports = connect(mapStateToProps, null)(Footer);