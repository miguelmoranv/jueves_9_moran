import React, { Component } from 'react';
import mockup from './imganes/Mockup.jpeg';

class Mockup extends Component{
    render(){
        return(
            <center>
                 <div style={{position:'absolute',width:'100%',height:'100%'}}>
                 <img src={mockup} />
            </div>
            </center>
            );
        }
    }
    
    export default Mockup;