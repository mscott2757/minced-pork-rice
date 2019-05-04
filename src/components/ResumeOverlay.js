import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
// set up worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
    const { visible, pdfSrc, handleToggleResume } = this.props;
    if (!visible) {
      return null;
    }
    return (
      <div className='resume' onClick={handleToggleResume}>
        <Document file={pdfSrc} onClick={this.stopToggleResume}>
          <Page renderAnnotations={false} renderTextLayer={false} pageNumber={1} />
        </Document>
        <div className='resume__close' onClick={this.handleToggleResume}>
          <i className={`fa fa-times fa-sm`}></i>
        </div>
      </div>
    );
  }
}

export default ResumeOverlay;
