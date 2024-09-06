import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import words from "./data/words.json"

function App() {
  const [count, setCount] = useState(0)
  let scrambledWord
  let numberWord = Math.floor(Math.random() * words.length)

  const word = words[numberWord].toUpperCase()
  console.log(word)

  const scrambler = () => {
    scrambledWord = word.split("").sort(() => Math.random() - 0.5).join("")
  }
  scrambler()
  console.log(scrambledWord)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>{scrambledWord}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
