import React, { Component } from 'react';
import War from './War'
import Home from './Home'

class App extends Component {

  state = {
    dragons: []
  }

  componentDidMount() {
  fetch('http://localhost:3001/dragons')
    .then( res => res.json())
    .then ( result => 
      // console.log(data)
      this.setState({
        dragons: result
    }))
  }

  changeDragonStatus = (id) => {
      this.setState({
        dragons: this.state.dragons.map( dragon => {
          if (dragon.id === id) {
            return {
              ...dragon,
              atHome: !dragon.atHome}
          } else {
            return dragon}
        })
      })
    }

  render() {
    let dragonsAtHome = this.state.dragons.filter( dragon => dragon.atHome)
    let dragonsAtWar = this.state.dragons.filter( dragon => !dragon.atHome )
    
    return (
      <div>
        <Home dragonsAtHome={dragonsAtHome} changeDragonStatus={this.changeDragonStatus}/>
        <War dragonsAtWar={dragonsAtWar} changeDragonStatus={this.changeDragonStatus}/>
      </div>
    );
  }
}

export default App;
