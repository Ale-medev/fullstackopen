import { useState } from 'react'

const Headline = ({title}) => (<h1>{title}</h1>)

const Button = ({handleClick, text}) => {
  return(
  <button onClick={handleClick}>
    {text}
  </button>
)}

const Statistics = ({goodValue, neutralValue, badValue, totalValue, averageValue, percentageValue}) => {
  return(
    <div>
      <p>good {goodValue}</p>
      <p>neutral {neutralValue}</p>
      <p>bad {badValue}</p>
      <p>all {totalValue}</p>
      <p>average {averageValue}</p>
      <p>positive {percentageValue}%</p>
    </div>
  )
}

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

      <Statistics 
        goodValue={good}
        neutralValue={neutral}
        badValue={bad}
        totalValue={total}
        averageValue={total === 0 ? 0 : average}
        percentageValue={total === 0 ? 0 : good * 100 / total}
      />

    </div>
  )
}

export default App
