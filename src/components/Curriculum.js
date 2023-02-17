import React, { Component } from 'react';

class Curriculum extends Component{
    render(){
        return(
                <center>
            <div style={{position:'absolute',width:'100%',height:'100%'}}>
                <object
                    data={require('./imganes/cv.pdf')}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                    >
                </object>
            </div>
            </center>
        );
    }
}

export default Curriculum;