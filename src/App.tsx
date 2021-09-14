import React from 'react';
import './App.css';
import FileUploader from './components/FileUploader'
import ImageTools from './components/ImageTools'
function App() {
  return (
    <div className="App">
      <FileUploader />
      <ImageTools />
    </div>
  );
}

export default App;
