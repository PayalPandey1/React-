import React from 'react'
import REACTDOM from 'react-dom'

const Home = () => {
  return <div>HOME</div>
}

REACTDOM.render(<Home />, document.querySelector('#root'))

export default Home
