import React from 'react'

export const Homecompo = (e) => {
  return (
    <div>
        <img src={e.img} alt="scp" />
        <h3>{e.name}</h3>
        <h4>{e.age}</h4>
    </div>
  )
}
