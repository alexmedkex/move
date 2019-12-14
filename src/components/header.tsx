import React from 'react'
import { getStyle } from "./header.style";

function Header() {
  const classes = getStyle()
  //const [greeting, setGreeting] = useState('Hello function component!')

  return (
    <div>
      <div className={classes.header}></div>
      <div className={classes.textArea}>
          <h1>Lisbon immigraton services</h1>
        </div>
    </div>
  )
}

export default Header