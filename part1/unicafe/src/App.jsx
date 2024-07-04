import { useState } from 'react'

const Headline = ({title}) => (<h1>{title}</h1>)

const Button = ({handleClick, text}) => {
  return(
  <button onClick={handleClick}>
    {text}
  </button>
)}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [sum, setSum] = useState(0)

  const handleClick = (state, setState, score) => {
    setState(state + 1)

    const updatedTotal = total + 1
    setTotal(updatedTotal)

    const updateSum = sum + score
    setSum(updateSum)
  }

  const average = sum / total

  return (
    <div>
      <Headline title='give feedback' />

      <Button handleClick={() => handleClick(good, setGood, 1)} text="good" />
      <Button handleClick={() => handleClick(neutral, setNeutral, 0)} text="neutral" />
      <Button handleClick={() => handleClick(bad, setBad, -1)} text="bad" />

      <Headline title='statistics' />

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {total === 0 ? 0 : average}</p>
      <p>positive {total === 0 ? 0 : good * 100 / total}%</p>
    </div>
  )
}

export default App
