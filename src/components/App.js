import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-botstrap';
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
    const BASE_URL = 'https://www.googleapis.combooks/v1/volumes?q=';
    fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'} )
    .then(response => response.json())
    .then(json => {
        let { items } = json;
        this.setState({items })
    });
  }

    // console.log('search', this.state.query);
  
  render(){
    return(
      <div className='App'> 
        <h2>Book Wormer</h2>
        <FormGroup>
          <FormControl 
            type= 'text' 
            placeholder='search for a book' 
            onChange={event => this.setState({query: event.target.value})}
            onKeyPress={event => {
              if(event.key === 'Enter'){ this.search }
            }}
          />
          <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph='search'></Glyphicon>
          </InputGroup.Addon>
        </FormGroup>
        <Gallery items={this.state.items}/>
      </div>
    )
  }
}


export default App;