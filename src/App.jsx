import { useState, useEffect } from 'react'
import './App.css'
import words from "./data/words.json"

function App() {
  const [guess, setGuess] = useState({
    guess: '',
  });


  let [guessCounter, setGuessCounter] = useState(0)

  const [scrambledWord, setScrambledWord] = useState('')
  const [word, setWord] = useState('')
  let [victory, setVictory] = useState(false)
  let [hint, setHint] = useState(false)

  useEffect(() => {
    let numberWord = Math.floor(Math.random() * words.length)
    const word = words[numberWord].toUpperCase()
    setWord(word)

    const scrambler = (word) => {
      return word.split('').sort(() => Math.random() - 0.5).join('')
    };

    setScrambledWord(scrambler(word))
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target
    setGuess((prevState) => ({
      ...prevState,
      [name]: value.toUpperCase(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    guess.guess.toUpperCase() === word ? setVictory(true) : setVictory = false
    guessCounter++
    setGuessCounter(guessCounter)
  }

  return (
    <>
      <h1>{scrambledWord}</h1>
      {!hint ?
      (<button className="hint" onClick={() => setHint(true)}>Need a hint?</button>)
      : <h4>{word[0]}{word[1]}***</h4>}
      {victory === false ?
        (<form onSubmit={handleSubmit}>
      <div>
        <label>Guess: </label>
        <input
          type="text"
          name="guess"
          value={guess.guess}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
      </form>) : <div></div>}
    {victory === true ? (<><div>You win! The answer was {guess.guess.toUpperCase()}</div><button onClick={() => window.location.reload()}>Play again?</button></>) : <div></div>}
    {victory === false && guessCounter > 0 ? (<div>Incorrect! Keep going!</div>) : <div></div>}
    <div>Guess Count: {guessCounter}</div>
    </>
  )
}

export default App
