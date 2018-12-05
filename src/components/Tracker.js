import React from "react";
import { connect } from "react-redux";

import Modal from "react-modal";
import ToggleButton from "react-toggle-button";
import Tooltip from 'react-tooltip-lite';

import {
  startRemoveSetting,
  startAddSetting,
  startToggleSpecial,
  startToggleRules,
  startAddSearch,
  startRemoveSearch,
  startClearSearch
} from "../actions/settings";
import Tags from "./Tags";
import Toggle from "./Toggle";

export class Tracker extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      info: false,
      special: this.props.special,
      rules: this.props.rules,
      description: false,
      showModal: false,
      search: this.props.search
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  onShowDescription = () => {
    this.setState((prevState) => ({ description: !prevState.description }));
  }

  onRemoveSetting = () => {
    this.props.startRemoveSetting({id: this.props.id})
  }

  onShowSettings = () => {
    this.setState((prevState) => ({ info: !prevState.info }));
  }

  onSpecial = (bool) => {
    this.props.startToggleSpecial({ special: bool, id: this.props.id })
  }

  onRules = (bool) => {
    this.props.startToggleRules({ rules: bool, id: this.props.id })
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }


  // SEARCH FUNCTIONALITY //


  onAddSearch = ({ inputValue }) => {
    this.props.startAddSearch({ search: inputValue, id: this.props.id })
  }

  onRemoveSearch = ({ searchId }) => {
    console.log(searchId)
    this.props.startRemoveSearch({ searchId, id: this.props.id });
    this.setState(prevState => ({ search: this.props.search }))
  }

  onClearSearch = () => {
    this.props.startClearSearch({ id: this.props.id });
  }


  render(){
    return (
      <div id={this.props.cssId}>
        <div className={`tracker ${(this.state.info || this.state.description) ? "selected" : "unselected"}`}>
        <p className="tracker__title"><a target="_blank" href={this.props.url}>{this.props.department}</a></p>
        <div className="tracker__buttons">
          <button className="tracker__info" onClick={this.onShowDescription} className="button--secondary">Info</button>
          <button className="tracker__info" onClick={this.onShowSettings} className="button--third">Settings</button>
          <button className="tracker__remove" onClick={this.handleOpenModal} className="button">Delete</button>
        </div>
        </div>
      <div className={this.state.info ? "showing" : "collapsed" }>
        <Toggle
          toggleVal={this.state.rules}
          title="All Filings"
          tooltipContent={"Enable 'All Filings' to recieve all types of documents filed in the federal register. Turn off to only recieve proposed or finalized rules."}
          toggleFunc={this.onRules}
        />
        <Toggle
          toggleVal={this.state.special}
          title="Special Collection"
          tooltipContent="Enable 'Special Collection' to recieve PDFs filed throughout the day. By disabling this feature, you will still recieve a zip file of regular filings at 9:00 a.m. EST."
          toggleFunc={this.onSpecial}
        />
        <Tags
          id={this.props.id} // id of tracker...
          search={this.props.search} // list of search terms ...
          title="Search"
          tooltipContent="Only return documents with specified filter terms. Leaving this blank will return all documents."
          handleClearSearch={this.onClearSearch}
          handleRemoveSearch={this.onRemoveSearch}
          handleAddSearch={this.onAddSearch}
        />
      </div>
      <div className={`${this.state.description ? "showing" : "collapsed"}`}>
        <p className="tracker__information">{this.props.description}</p>
      </div>
      <Modal isOpen={this.state.showModal}>
        <div className="modal-div">
        <p className="modal-description">Delete this tracker?</p>
        <button className="button--secondary" onClick={this.handleCloseModal}>Cancel</button>
        <button className="button--clear" onClick={this.onRemoveSetting}>Delete</button>
        </div>
      </Modal>
      </div>
    )
  };
};

const mapDispatchToProps = (dispatch,props) => ({
  startRemoveSetting: (id) => dispatch(startRemoveSetting(id)),
  startToggleSpecial: ({ special, id }) => dispatch(startToggleSpecial({ special, id })),
  startToggleRules: ({ rules, id }) => dispatch(startToggleRules({ rules, id })),
  startAddSearch: ({ search, id }) => dispatch(startAddSearch({ search, id })),
  startRemoveSearch: ({ searchId, id }) => dispatch(startRemoveSearch({ searchId, id })),
  startClearSearch: ({ id }) => dispatch(startClearSearch({ id }))
})

export default connect(null, mapDispatchToProps)(Tracker);
