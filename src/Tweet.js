import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

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
<Card style={{ width: '18rem' }}>
    <Card.Body>
        <Card.Title>{date}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Card.Text>
          {text}
        </Card.Text>
    </Card.Body>
</Card>
    )
}

export default Tweet;