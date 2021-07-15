import React, { Component } from 'react';
import Header from './Header';
import CardGameBoard from './CardGameBoard';

class App extends Component {
    state = {  }
    
    render() { 
        return (  
            <div className="container-fluid">
                <Header />
                <CardGameBoard />
            </div>
        );
    }
}
 
export default App;