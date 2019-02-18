import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-botstrap';

class App extends Component{
  
  render(){
    return(
      <div> 
        <h2>Book Wormer</h2>
        <FormGroup>
          <FormControl type= 'text' placeholder='search for a book' />
            <Glyphicon glyph='search'></Glyphicon>
        </FormGroup>
      </div>
    )
  }
}


export default App;