import React, { Component } from 'react'
//import War from './War.js'

class Home extends Component{


    render(){
        // Note how style attributes are now passed as object instead of a string!!!
        return (
        <div style={{float:'left',width:'40%', padding:'5%', backgroundColor:'#00ffd8'}}>
            <h1>Home</h1>
            {/* Render Dragons Here */}
            {this.props.dragonsAtHome.map( dragon =>
            <div>
                <h3>{dragon.name}</h3>
                <img width='500px' src={dragon.image} alt =''/> <br/>
                <button onClick={ () => this.props.changeDragonStatus(dragon.id)}>Send to War</button>
            </div>
            )}
        </div>
        )
    }

}

export default Home