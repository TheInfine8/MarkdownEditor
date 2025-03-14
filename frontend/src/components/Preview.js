import React from 'react';
import '../styles.css';

const Preview = ({ html }) => {
    return (
        <div
            className="preview-pane"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
};

export default Preview;