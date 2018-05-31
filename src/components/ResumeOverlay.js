import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

class ResumeOverlay extends Component {
  componentDidMount() {
    if (this.props.visible) {
      document.addEventListener("keydown", this.handleEsc, false);
    }
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.visible) {
      document.addEventListener("keydown", this.handleEsc, false);
    } else {
      document.removeEventListener("keydown", this.handleEsc, false);
    }
  }

  stopToggleResume = (e) => {
    e.stopPropagation();
  }

  handleEsc = (e) => {
    if (e.keyCode === 27) {
      this.props.handleToggleResume();
    }
  }

  render() {
    const { visible, pdfSrc, downloadURL, handleToggleResume } = this.props;
    if (!visible) {
      return null;
    }
    return (
      <div className='resume-overlay' onClick={handleToggleResume}>
        <Document file={pdfSrc} onClick={this.stopToggleResume}>
          <Page renderAnnotations={false} renderTextLayer={false} pageNumber={1} />
        </Document>
        <div className='resume-overlay__close' onClick={this.handleToggleResume}>
          <i className={`fa fa-times fa-sm`}></i>
        </div>
      </div>
    );
  }
}

export default ResumeOverlay;
