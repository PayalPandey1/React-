import React, { Component } from 'react'
// eslint-disable-next-line no-unused-vars
class Lifecyclereact extends Component {
  // 1.Loads defaut props
  // 2.sets default state
  // 3.mounting of component
  // 4.render method
  // 5.unmounting of component

   state={
       name: 'lifecycle state' 
   }
  componentWillMount () {
    console.log('Component will Mount')
  }

  componentWillUpdate() {
      console.log('Before Update')
  }

  shouldComponentUpdate(nextProps,nextState){
      if(nextState === 'changed')
        return false
      else
        return true 
  }

  componentWillReceiveProps()
  {
      console.log('Before Receiving Props')
  }

  componentWillUnmount()
  {
      console.log('Unmounted')
  }
  
  render () {
    console.log('rendered again')
    console.log(this.state.name)
    return (
        <div onClick={
            ()=> this.setState( {
                name: 'changed'
            } ) }>
            Lifecycle and step 3 i.e render </div>
    )
  }
  componentDidMount () {
    console.log('Component did Mount')
  }
  componentDidUpdate(){
      console.log('After Upadate') 
  }
}

export default Lifecyclereact
