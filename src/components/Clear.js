import React from "react";
import { connect } from "react-redux";
import { startClearSettings } from "../actions/settings";
import Modal from "react-modal";

export class Clear extends React.Component {
 constructor(props){
    super();
    this.state = {
     showModal: false
   }
   this.handleOpenModal = this.handleOpenModal.bind(this);
   this.handleCloseModal = this.handleCloseModal.bind(this);
   this.handleClear = this.handleClear.bind(this);
 }

 handleOpenModal() {
   this.setState({ showModal: true });
 }

 handleCloseModal () {
   this.setState({ showModal: false });
 }

 handleClear(){
  this.props.startClearSettings()
    .then(() => this.handleCloseModal());
 }

render(){
  return (
    <div className="clear" id="clear">
        { this.props.settings.length > 0 ?
          <button
            className="button--clear" onClick={this.handleOpenModal}
          >Clear</button>
          : <div className="box-layout--started"><p className="prompt">Add trackers to get started</p></div>
        }
        <Modal isOpen={this.state.showModal}>
          <div className="modal-div">
          <p className="modal-description">This will delete all trackers and data. This action cannot be undone.</p>
          <button className="button--secondary" onClick={this.handleCloseModal}>Cancel</button>
          <button className="button--clear" onClick={this.handleClear}>Delete All Trackers</button>
          </div>
        </Modal>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch,props) => ({
  startClearSettings: () => dispatch(startClearSettings())
});

const mapStateToProps = (state,props) => ({
  settings: state.settings
})

export default connect(mapStateToProps, mapDispatchToProps)(Clear);