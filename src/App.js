import React from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from "./comps/imageGrid";
import Modal from './comps/Modal';


function App() {

  const [selectedImg, setSelectedimg] =React.useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedimg={setSelectedimg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedimg={setSelectedimg} />
      )}
    </div>
  );
}

export default App;
