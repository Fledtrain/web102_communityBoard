import './App.css'
import Event from './components/Event'

const App = () => {

  return (
    <>
      <header>
        <div className='heading'>
          <h1>Best Video Games of 2023</h1>
        </div>
        <div>
          <Event />
        </div>
      </header>
      <footer>
        <p>Created by Joey Whitehead for CodePath Web 102</p>
      </footer>
    </>
  )
}

export default App
