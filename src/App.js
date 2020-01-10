import React, { useState } from 'react'
import AddtoBar from './AddtoBar'
import MyNavBar from './MyNavBar'
// import Counter from '/Counter'
import AddTODOs from './AddTODOs'
import InputRow from './InputRow'
import Todo from './Todo'
const App = () => {
  const [allTodos, setAllTodos] = useState([])
  console.log(allTodos)
  
  return(
  <div>
    <MyNavBar />
    <AddtoBar />
    <AddTODOs />
    <InputRow allTodos={allTodos} setAllTodos={setAllTodos}/>
    {allTodos.map(todo => <Todo allTodos={allTodos} setAllTodos={setAllTodos} key={todo.id} {...todo} />)}
  </div>
  )
}

export default App
