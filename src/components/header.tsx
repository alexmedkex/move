import React from 'react'
import { getStyle } from "./header.style";

function Header() {
  const classes = getStyle()
  //const [greeting, setGreeting] = useState('Hello function component!')

  return (
    <div className={classes.header}>
      <div className={classes.textArea}>
        <h1>Make Portugal your new home!</h1>
      </div>
    </div>
  )
}

export default Header