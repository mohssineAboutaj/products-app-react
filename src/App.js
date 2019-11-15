import React, { Component } from 'react'
import '@mohssineaboutaj/grid-system/css/grid-system.min.css';
import './App.css';
import Products from './components/Products'
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

class App extends Component {
  apiUrl = "https://my-json-server.typicode.com/mohssineAboutaj/api/products"
  axiosOptions = {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
    },
  }

  state = {
    productList: [],
  }

  componentDidMount = async () => {
    await Axios(
      this.apiUrl,
      this.axiosOptions,
    ).then(res => {
      this.setState({ productList: res.data });
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className="app">
        <h1>
          Products <FontAwesomeIcon icon={faReact} className="icon" /> App
        </h1>
        <Products list={this.state.productList} />
      </div>
    )
  }
}

export default App;
