import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const params = useParams()
  return (
    <div>My name is: {params.username}</div>
  )
}

export default User