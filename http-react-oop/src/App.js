import React, { useState, useEffect } from 'react';
import './App.css';
import FetchService from './hooks/FetchService';

const url = 'http://localhost:3000/products'; 

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [], 
      name: '',
      price: '', 
      id: '', 
      editMode: false      
    }
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async() => {
    // const { data, error, loading } = await new FetchService({ url }).fetchData();    
    console.log(await new FetchService({ url }).fetchData());    

    // if (error) {
    //   this.setState({ error });
    // } else {
    //   this.setState({ products: data, loading });
    // }
  }


  render() {

    console.log(this.fetchProducts());

    // console.log(products)

    
    return (
    
      <div className="App">
        <header className="App-header">
          <h1>React App</h1>
        </header>
      </div>
    );
  }


}
