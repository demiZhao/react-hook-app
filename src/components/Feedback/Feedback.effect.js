import React, { useState, useEffect } from 'react'
import { Form, Label, Textarea, Button } from './Feedback.styles'

export function FeedbackEffectComponent() {
  const [text, setText] = useState('')

  useEffect(() => {
    async function getStarWarsQuote() {
      // Get initial text
      const response = await fetch(
        'https://starwars-quote-proxy-gi0d3x1lz.now.sh/api/randomQuote'
      )
      const data = await response.json()
      const quote = data.starWarsQuote.split('— ').join('\n\n-')
      setText(quote)
    }
    if (text === '') {
      getStarWarsQuote()
    }
  }, [text])

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault()
    console.log(`Submitting response to API: "${text}"`)
    setText('')
  }

  // Update text in state onchange for textarea
  function handleTextChange(e) {
    const updatedText = e.target.value

    setText(updatedText)
  }

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Label>
        💭&nbsp;Quote From <strong>Star War</strong>&nbsp;💭
      </Label>
      <Textarea value={text} onChange={e => handleTextChange(e)} />
      <Button type="submit">Get Quote</Button>
    </Form>
  )
}
