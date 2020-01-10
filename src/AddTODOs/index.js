import React, { useState } from 'react'
import { Input, Button, Form, Form2 } from './styles'

const AddTODOs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const resetInputs = () => {
    setName('')
    setEmail('')
    setPhone('')
  }

  const FormInput = ({ label, value, setValue }) => (
    <div>
      <h3>{label}</h3>
      <input value={value}
        onChange={e => setValue(e.target.value)} />
    </div>
  )

  const FormButton = ({ text, action }) => (
    <button onClick={action}>
      {text}
    </button>
  )

  return (
    <Form>
      <Form2>
        <p></p>
        <h1>Your todos!</h1>
        <p></p>
        <Input label="TODO" setValue={setName} />
        {/* <Button text="submit" action={submitForm} /> */}
        <Button text="reset" action={resetInputs}>ADD TODO</Button>
      </Form2>
    </Form>
  )
}


export default AddTODOs
