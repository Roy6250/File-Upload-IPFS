import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import { create } from 'ipfs-http-client'

//const ipfsClient = require('ipfs-http-client')
const ipfs = create('https://ipfs.infura.io:5001/api/v0')

class App extends Component {

  constructor(props)
  {
    super(props)
    this.state = {
      buffer: null,
      memeHash:"Qmc9TdNL5kDbKpv2XAPWtQPiqUj7bEi9Be8Tthh8ZnShD1"
    }
  }

  captureFile = (event) =>{
    event.preventDefault()
    //console.log("File captured......")
    const file= event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () =>{
      console.log('buffer', Buffer(reader.result))
      this.setState({buffer: Buffer(reader.result)})
    }

  }
    

  // Example Hash : "Qmc9TdNL5kDbKpv2XAPWtQPiqUj7bEi9Be8Tthh8ZnShD1"
  //Example URL: "https://ipfs.infura.io/ipfs/Qmc9TdNL5kDbKpv2XAPWtQPiqUj7bEi9Be8Tthh8ZnShD1"


  onSubmit = async (event) =>{
    event.preventDefault()
    console.log("Submitting the form...")
    const hash= await ipfs.add(this.state.buffer)
    const url = `https://ipfs.infura.io/ipfs/${hash.path}`
    console.log(typeof hash.path)
  }
   

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hospital Records
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a>

                <h2> Upload the records</h2>

                <form onSubmit={this.onSubmit}>
                  <input type='file' onChange={this.captureFile} />
                  <input type ='submit'/>
                </form>
                
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
