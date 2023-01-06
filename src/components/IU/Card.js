import React from 'react'

import './Card.css'
const Card = (props) => {
  const propstyle = props.className == 0 ? props.className : ''
  const classes = 'card' + propstyle
  return <div className={classes}>{props.children}</div>
}

export default Card
