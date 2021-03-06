import React, { Component } from 'react';
import '../css/App.css';
import Transition from 'react-transition-group/Transition';

class TransitionComp extends Component{
    state={
        show : true 
    }

    showDiv(){
       // console.log(show)
        console.log(this.state.show)
        this.setState({
            show : !this.state.show ? true : false  
        })
    }
    render(){
        return(
            <div>
                <Transition 
                  in={this.state.show}
                  timeout={2000}
                >
                { state => 
                    <div className = { `square square-${state}`}
                       
                    } >
                    {state}
                    </div>
                }
                </Transition>
                <div className='showDiv'>
                   Hide or Show 
                  <button onClick={this.showDiv.bind(this)}> button </button>
                </div>
            </div>         
        )
    }
}

export default TransitionComp;