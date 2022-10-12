import React, { useState } from 'react'

const Tweet = (props) => {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter( counter + 4)
    }

    const decrement = () => {
        setCounter( counter - 4)
    }
  
    const text = props.text
    const author = props.author
    const date = props.date
    return (
        <div>
            <h3>{text.toUpperCase()}</h3> 
            <h6>{date.toUpperCase()} by {author.toUpperCase()}</h6>
            <br></br>
            <h1>counter: {counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Tweet;