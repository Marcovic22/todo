import React from 'react'
import { DeleteButton } from './styles'

const Todo = ({
  id, todo, allTodos, setAllTodos,
}) => (
    <DeleteButton>
      <p>{todo}</p>
      <button
        type="button"
        onClick={() => {
          // Delete Todo with id
          setAllTodos(allTodos.filter(t => {
            if (id === t.id) {
              return false
            }
            return true
          }))
        }}
      >
        Delete Todo
    </button>
    </DeleteButton>
  )

export default Todo