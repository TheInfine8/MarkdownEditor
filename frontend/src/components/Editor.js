import React, { useState } from 'react';
import axios from 'axios';

const Editor = ({ onMarkdownChange }) => {
    const [markdown, setMarkdown] = useState('');

    const handleInputChange = (e) => {
        const newMarkdown = e.target.value;
        setMarkdown(newMarkdown);
        onMarkdownChange(newMarkdown); // Pass the Markdown text to the parent component
    };

    return (
        <textarea
            value={markdown}
            onChange={handleInputChange}
            placeholder="Type your Markdown here..."
            style={{ width: '100%', height: '300px' }}
        />
    );
};

export default Editor;