import { useState } from 'react'

const Headline = ({title}) => (<h1>{title}</h1>)

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
)}

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({goodValue, neutralValue, badValue, totalValue, averageValue, percentageValue}) => {
  return(
    <div>
      {
        totalValue === 0 ? (
          <p>No feedback give</p>
        ) : (
          <table>
            <tbody>
              <StatisticLine text='good' value={goodValue} />
              <StatisticLine text='neutral' value={neutralValue} />
              <StatisticLine text='bad' value={badValue} />
              <StatisticLine text='all' value={totalValue} />
              <StatisticLine text='average' value={averageValue} />
              <StatisticLine text='positive' value={percentageValue + '%'} />
            </tbody>
          </table>
        )
      }
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

      <Button handleClick={() => handleClick(good, setGood, 1)} text='good' />
      <Button handleClick={() => handleClick(neutral, setNeutral, 0)} text='neutral' />
      <Button handleClick={() => handleClick(bad, setBad, -1)} text='bad' />

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
