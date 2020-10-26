import React, {useState} from "react";
import ProgressBar from "./progressBar";

const UploadForm =()=>{

const [file,setFile]=useState(null);
const [error, setError] = useState(null)

const types = ["image/png", "image/jpeg"]

const getFile=(e)=>{
  const selected = e.target.files[0];

  if(selected && types.includes(selected.type)){
   setFile(selected)
   setError(null)
  }
  else{
    setFile(null)
     setError("Please make sure you selected either png or jpeg image")
  }

}

return (
  <form>
    <label>
      <input type="file" onChange={getFile} />
      <span>+</span>
    </label>
    <div className="output">
      {error ? <div className="error">{error}</div> : ""}
      {file ? <div>{file.name}</div> : ""}
      {file && <ProgressBar file={file} setFile={setFile} />}
    </div>
  </form>
);

}

export default UploadForm;
