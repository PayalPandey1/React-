import React from 'react'
// import REACTDOM from 'react-dom'

const Conditional = () => {
  const value = true
  const showIt = () => {
    return (
      value ? <div> this is true </div> : <div> False </div>
    )
  }
  return (
    <div>
      {showIt}
    </div>
  )
}

// REACTDOM.render(<Home />, document.querySelector('#root'))
export default Conditional
