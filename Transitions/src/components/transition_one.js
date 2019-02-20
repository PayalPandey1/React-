import React, { Component } from 'react';
import '../css/App.css';
import Transition from 'react-transition-group';

class TransitionComp extends Component{
    state={
        show : true 
    }

    showDiv(){
       // console.log(show)
        console.log(this.state.show)
        this.setState( {
            show : !this.state.show ? true : false  
        })
    }
    render(){
        return(
            <div>
                { this.state.show 
                  ? 
                    <div style= {{
                      background: 'cyan',
                      height: '100px'
                      }} > 
                    </div>
                  :
                    null
                }   
                
                <div className='showDiv'>
                   Hide or Show 
                   {console.log(this.state.show)}
                   {console.log(this)}
                  <button onClick={this.showDiv.bind(this)}> button </button>
                </div>
            </div>         
        )
    }
}


export default TransitionComp;