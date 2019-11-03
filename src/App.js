import React, { Component } from 'react'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import Products from './components/Products'
import Axios from 'axios';

class App extends Component {
  apiUrl = "https://my-json-server.typicode.com/mohssineAboutaj/Products/Products"
  axiosOptions = {
    method: 'GET',
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
      <div className="App">
        <h1>hello</h1>
        <Products list={this.state.productList} />
      </div>
    )
  }
}

export default App;
