import React from 'react'
import REACTDOM from 'react-dom'
const Post = () => {
  return (
    <div>POST</div>
  )
}

REACTDOM.render(<Post />, document.querySelector('#root'))

export default Post
