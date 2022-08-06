import './App.css';
import React, { Component } from'react';
import axios from 'axios';

class App extends Component {
  state = {
    selectedFile: null,
    fileUploadSuccessfully: false
  }

  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]});
  }

  onFileUpload = () => {
    const formData = new FormData();
    formData.append(
      "demo file",
      this.state.selectedFile,
      this.state.selectedFile.name
    )
    axios.post("https://mchftdmr2l.execute-api.us-east-1.amazonaws.com/beta/file-upload", formData).then(() => {
      this.setState({selectedFile: null});
      this.setState({fileUploadSuccessfully: true});
    })
  }

  fileData = () => {
    if (this.state.selectedFile) {
      return (
      <div>
        <h2>File Details:</h2>
        <p>File Name: {this.state.selectedFile.name}</p>
        <p>File Type: {this.state.selectedFile.type}</p>
      </div>
      );
    } else if (this.state.fileUploadSuccessfully) {
      return (
        <div>
          <br />
          <h4>Your file has been uploaded successfully!</h4>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose a file and then press Upload button</h4>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <h2>Devang File Upload Website</h2>
        <h3>File Upload with React and a Serverless API!</h3>
        <div>
          <input type="File" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>
            Upload
          </button>
        </div>
        {this.fileData()}
      </div>
    )
  }
}
export default App;
