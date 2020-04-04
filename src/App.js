import React from 'react'
import { Container, InnerContainer, H1 } from './App.styles'
import { FeedbackEffectComponent } from './components/Feedback/Feedback.effect'

function App() {
  return (
    <Container id="react-hook-app">
      <H1>React Custom Hook</H1>
      <InnerContainer>
        <FeedbackEffectComponent />
      </InnerContainer>
    </Container>
  )
}

export default App
