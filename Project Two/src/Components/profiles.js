import React from 'react'
import { Redirect } from 'react-router-dom'
// import REACTDOM from 'react-dom'
const Profile = (props) => {
  const redir = () => {
    return (
      <Redirect to='/' />
    )
  }
  return (
    <div>
      <div>Profile</div>
      <div>{props.match.params.id} </div>
      {redir()}
    </div>
  )
}

export default Profile
