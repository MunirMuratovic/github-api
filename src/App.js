import React, { useRef } from 'react';
import FileSaver from 'file-saver';

function App() {
  const queryUrl = useRef();
  const textareaRef = useRef();
  const fileNameRef = useRef();

  let dataAppState = {
    url: "",
    filename: '',
    textareaRef: ''
  }

  function clearAppData() {// WORKS GOOD!
    dataAppState.url = '';
    queryUrl.current.value = ''
    dataAppState.filename = '';
    textareaRef.current.value = ''
    dataAppState.textarea = '';
    fileNameRef.current.value = '';
    console.clear();
  }

  async function getRepos() {// WORKS GOOD!
    const response = await fetch(dataAppState.url);
    const result = await response.json();
    dataAppState.textareaRef = result;
    textareaRef.current.value = JSON.stringify(result);
  }

  function changeUrl(e) {// WORKS GOOD!
    dataAppState.url = e.target.value;
    console.log(dataAppState.url);
  }

  function updateTextArea(e) {// WORKS 
    dataAppState.textareaRef = e.target.value;
    console.log(dataAppState.textareaRef);
  }

  function changeFilename(e) {//WORKS GOOD!
    const filename = e.target.value;
    dataAppState.filename = filename;
  }

  function saveJson(e) {//WORKS GOOD!
    var content = new Blob([JSON.stringify(dataAppState.textareaRef)], { type: "application/json;charset=utf-8" });
    FileSaver.saveAs(content, dataAppState.filename);
  }

  return (
    <div className="App text-center">
      <div className="d-flex my-2"><input type="text" ref={queryUrl} onChange={changeUrl} className="form-control" placeholder="Enter Github Query Link" />
        <button className="btn btn-primary ml-2" id="search" onClick={getRepos}>Search</button>
      </div>

      <textarea ref={textareaRef} onChange={updateTextArea} className="my-2 form-control" id="exampleFormControlTextarea1" rows="20" placeholder="Enter some text or Fetch Github Data"></textarea>

      <input type="text" ref={fileNameRef} className="my-2 form-control" onChange={changeFilename} placeholder="Insert file name"></input>

      <button className="btn btn-success mr-2" onClick={saveJson}>Export JSON File</button>
      <button onClick={clearAppData} className="btn btn-danger">Reset All Fields</button>

    </div>
  );
}

export default App;
