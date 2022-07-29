import React, { Component } from 'react';
import PropTypes from "prop-types"
import s from "./Modal.module.css"
const body = document.querySelector('body');
export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
    body.classList.add('no-scroll');
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
    body.classList.remove('no-scroll');
  }

  handleCloseModal = event => {
    if (event.code === 'Escape') {
      this.props.onClose()
    }
  };

  backDropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose()
    }
  };
  render() {
    return (
      <div onClick={this.backDropClick} className={s.backDrop}>
        <div className={s.modal}>
          <img src={this.props.largeimg} alt="pictr" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
    largeimg: PropTypes.string.isRequired,
    onClose: PropTypes.func
}
