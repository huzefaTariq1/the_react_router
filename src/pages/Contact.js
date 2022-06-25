import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {

  const queryString=useLocation().search
  const queryParam= new URLSearchParams(queryString)
  const name=queryParam.get('name')

  return (
    <div>hey {name} Contact</div>
  )
}

export default Contact