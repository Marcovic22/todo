import React, { useState } from 'react'
import nanoid from 'nanoid'


const InputRow = ({ allTodos, setAllTodos }) => {
  const [todo, setTodo] = useState('')

  return(
    <div>
      <input value={todo} onChange={e => setTodo(e.target.value)} />
      <button type="button" onClick={() => setAllTodos([...allTodos, { todo, id: nanoid() }])}>Add Todo</button>
    </div>
  )
}

export default InputRow