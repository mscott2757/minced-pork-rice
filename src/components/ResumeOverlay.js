import React from 'react';
import { Document, Page } from 'react-pdf';

const ResumeOverlay = ({ visible, pdfSrc, handleToggleResume }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className='resume-overlay'>
      <Document file={pdfSrc}>
        <Page renderAnnotations={false} renderTextLayer={false} pageNumber={1} />
      </Document>
    </div>
  );
}

export default ResumeOverlay;
