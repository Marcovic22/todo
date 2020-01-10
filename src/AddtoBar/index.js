import React from 'react'
// eslint-disable-next-line import/extensions
import { Input, Container, Button } from './styles.js'

const AddtoBar = () => (

  <Container>
    <Input placeholder="First Name" />
    <Button type="button"> Add TODO</Button>
  </Container>
)

export default AddtoBar
