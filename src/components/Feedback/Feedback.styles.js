import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-family: Helvetica, Arial, sans-serif;
  margin: 3rem auto;
  width: 600px;
  text-align: center;
`

const EmptyContainer = styled.div`
  margin: 3rem auto;
  width: 300px;
  text-align: center;
`

const Label = styled.label`
  font-size: 1.25rem;
  color:  #737373;
  font-family: fantasy;
`

const Textarea = styled.textarea`
  border-radius: 20px;
  border: 2px solid   #75a3a3;
  box-sizing: border-box;
  font-size: 1.2rem;
  font-family: fantasy;
  color:   #737373;
  height: 300px;
  margin: 3rem 3rem;
  padding: 2rem;
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;

  &:focus,
  &:active {
    border: 2px solid #4287f5;
    background-color: #f2f6fc;
  }
`

const Button = styled.button`
  background-color: #5c8a8a;
  border: 2px solid #527a7a;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  margin: 0.25rem auto;
  padding: 0.5rem 1rem;
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  text-transform: uppercase;
  outline: 0;
  box-shadow: none!important;

  &:hover,
  &:focus,
  &:active {
    transform: scale(1.1);
  }

`
export { Button, Form, Label, Textarea, EmptyContainer }
