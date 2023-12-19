import { useState } from 'react'
//import Statistics from './Statistics/Statistics'
//import Statistics from "../Statistics/Statistics"
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </tr>
  );
}

const Statistics = (props) => {

  if (props.statistics.total > 0) {

    const statistics = props.statistics;
    return (
      <div className="StatisticsWrapper">
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={statistics.good} />
            <StatisticLine text="neutral" value={statistics.neutral} />
            <StatisticLine text="bad" value={statistics.bad} />
            <StatisticLine text="all" value={statistics.total} />
            <StatisticLine text="average" value={(statistics.good - statistics.bad) / statistics.total} />
            <StatisticLine text="positive" value={(statistics.good * 100) / statistics.total} />
          </tbody>
        </table>
      </div>
    );
  }
  else {
    return (
      <>
        <br />
        No feedback given
      </>
    )
  }
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const statistics = {
    good,
    neutral,
    bad,
    total: good + bad + neutral,

  }

  const AddGood = (event) => {
    //event.stopPropagation()
    setGood(good + 1)
  }

  const AddNeutral = (event) => {
    setNeutral(neutral + 1)
  }

  const AddBad = (event) => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <input type='button' value="Good" onClick={() => AddGood()}></input>
        <input type='button' value="Neutral" onClick={() => AddNeutral()}></input>
        <input type='button' value="Bad" onClick={() => AddBad()}></input>
      </div>
      <Statistics statistics={statistics}></Statistics>

    </div>
  )
}

export default App