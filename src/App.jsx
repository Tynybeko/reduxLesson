import './App.css'
import Block1 from './components/Block1'
import Block2 from './components/Block2'
import { useDispatch, useSelector } from 'react-redux'
import { FetchAllFood, todoActions } from './redux/slices/todo'
import { useEffect } from 'react'


function App() {
  const dispatch = useDispatch()
  console.log(todoActions.add);
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    let data = Object.fromEntries(formData.entries())
    data.id = Math.random()
    dispatch({ type: 'todo/add', payload: data })
    e.target.reset()
  }

  useEffect(() => {
    dispatch(FetchAllFood(1234))
  }, [])


  return (
    <>
      <div>
        <Block1 />
        <Block2 />
        <h1>Hello</h1>
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
