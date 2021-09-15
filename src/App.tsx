import React from 'react';
import './App.css';
import FileUploader from './components/FileUploader'
import ImageTools from './components/ImageTools'
function App() {
  return (
    <div className="App">
      <h1>James Nicholson</h1>
      <a href="https://github.com/jamesnicholson" target="_blank">My GitHub</a>

      <FileUploader />
      <ImageTools />
    </div>
  );
}

export default App;
