// @ts-nocheck
import React from 'react'

const Button = ({ text }) => {
  return (
    <button className="btn btn-primary" onClick={(event) => (event.target.innerText = 'hey you clicked me')}>
      {text}
    </button>
  )
}

export default Button
