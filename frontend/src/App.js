import React, { useState } from 'react';
import axios from 'axios';
import Editor from './components/Editor';
import Preview from './components/Preview';

const App = () => {
    const [html, setHtml] = useState('');

    const handleMarkdownChange = async (markdown) => {
        try {
            // Send the Markdown text to the backend for conversion
            const response = await axios.post('http://localhost:5000/convert', { markdown });
            setHtml(response.data.html); // Update the HTML state with the converted result
        } catch (error) {
            console.error('Error converting Markdown:', error);
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            {/* Website Title and Description */}
            <header style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Real-time Markdown Editor with Live Preview</h1>
                <p style={{ fontSize: '16px', color: '#555' }}>
                A Real-time Markdown Editor with Live Preview allows users to write Markdown and instantly see the formatted output as HTML. It enhances the writing experience by providing syntax highlighting, making it easier to format text, code, and other elements efficiently.
                </p>
            </header>

            {/* Editor and Preview Section */}
            <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                    <h2>Editor</h2>
                    <Editor onMarkdownChange={handleMarkdownChange} />
                </div>
                <div style={{ flex: 1 }}>
                    <h2>Preview</h2>
                    <Preview html={html} />
                </div>
            </div>
        </div>
    );
};

export default App;
