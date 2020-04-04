import styled from 'styled-components'

const Container = styled.main`
  // max-width: 690px;
  margin: 3rem auto;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
`
const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const H1 = styled.h3`
  font-size: 1.6rem;
  color:  #5c8a8a;
`
export { Container, InnerContainer, H1 }
