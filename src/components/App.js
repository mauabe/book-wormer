import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/FormGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Gallery from './Gallery';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      items: []
    }
  }

  search(){
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'} )
    // console.log('search', this.state.query);
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(json => {
        let { items } = json;
        this.setState({ items })
    });
  }

  
  render(){
    return(
      <div className='App'> 
        <h2>Book Wormer</h2>
        <FormGroup>
          <InputGroup className="searcher">
            <FormControl 
              type= 'text' 
              placeholder='Looking for a good book...' 
              onChange={event => this.setState({query: event.target.value})}
              onKeyPress={event => {
                if(event.key === 'Enter'){ this.search() }
              }}
            />
            <InputGroup onClick={ () => this.search()} >
              <button type="button" className="btn btn-info">
                <span className="glyphicon glyphicon-search"></span> Search
              </button>
            </InputGroup> 
          </InputGroup>
        </FormGroup>
        <Gallery items={this.state.items}/>
      </div>
    )
  }
}


export default App;