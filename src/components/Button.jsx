import React from 'react'

function Button({className, name}) {
  return (
    <button className={`w-24 h-12 rounded-5px ${className} outline outline-primary cursor-pointer`}>{name}</button>
  )
}

export default Button