import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Block1 from './components/Block1'
import Block2 from './components/Block2'
import { useDispatch, useSelector } from 'react-redux'
import { todoActions } from './redux/slices/todo'
function App() {
  const dispatch = useDispatch()
  console.log(todoActions.add);
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    let data = Object.fromEntries(formData.entries())
    data.id = Math.random()
    dispatch({type: 'todo/add', payload: data})
    e.target.reset()
  }

  return (
    <>
      <div>
        <Block1 />
        <Block2 />

        <form onSubmit={handleSubmit} action="">
          <input name='name' type="text" />
          <input name='age' type="number" />
          <input name='is_complete' type="checkbox" id="" />
          <button>SEND </button>
        </form>
      </div>
    </>
  )
}

export default App
