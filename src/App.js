import React, { useState, useRef } from 'react';
import FileSaver from 'file-saver';
import RepoList from './RepoList';

function App() {
  const [repos, fileName] = useState(['', 'test']);
  const repoNameRef = useRef();

  async function getRepos() {
    const url = "https://api.github.com/search/repositories?q=stars:>100000";
    const response = await fetch(url);
    const result = await response.json();
    // console.log(result);
    
  }

  function handleAddRepo(e) {
    const name = repoNameRef.current.value;
    console.log(name);
  }

  function handleExportJson() {
    var content = new Blob([JSON.stringify(this.result)], { type: "application/json;charset=utf-8" });
    FileSaver.saveAs(content, "hello_world.json");
  }

  return (
    <div className="App text-center">
      <h2>GitHub API Editor</h2>
      <div className="d-flex"><input type="text" ref={repoNameRef} className="form-control" placeholder="Github repo" />
        <span className="btn btn-primary ml-2" id="search" onClick={getRepos}>Search</span></div>
      <RepoList repos={repos} />
      <div onClick={handleAddRepo}>Add Repo</div>

      <input className="form-control" value="test123"></input>
      <div className="btn btn-success" onClick={handleExportJson}>Export JSON File</div>
    </div>
  );
}

export default App;
