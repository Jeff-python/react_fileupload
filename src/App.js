import React, {Component} from 'react';
import axios from 'axios';



class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
          image:null,
          url:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleChange.bind(this);
    
    }
    handleChange = e => {
      if(e.target.files[0]){
        const image = e.target.files[0];
        this.setState(()=>({image}));

      }
    }

  //   axios.post("http://localhost:8000/upload", data, { // receive two parameter endpoint url ,form data 
  // })
  // .then(res => { // then print response status
  //   console.log(res.statusText)
  // })
    // handleUpload =()=>{ 
    //   const {image} = this.state;


    // }

    render() {
      const style = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      };


        return (
            <div style ={style}>
                <input type= "file" name= "image" onChange ={this.handleChange}/>
                <button onClick={this.handleUpload}>Upload</button>
            </div>
        )
    }
}

export default App;
