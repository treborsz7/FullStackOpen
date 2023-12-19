import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [selected, setSelected] = useState(0);
  const [mostVoted, setmostVoted] = useState(0)
  const Vote = () => {

    const copy = [...votes];

    copy[selected] += 1;
    setVotes(copy);

    let voted = 0;

    copy.forEach(x => {
      voted = x > voted ? x : voted;
    });

    if (mostVoted != voted)
      setmostVoted(voted)

  }

  const GoTONextAnecdote = () => {

    if (selected < anecdotes.length - 1)
      setSelected(selected + 1);
    else
      setSelected(0);


  }
  return (
    <>
      <div>
        {anecdotes[selected]}

      </div>
      <div>
        <input type='button' value="vote" onClick={() => Vote()}></input>
        <input type='button' value=" nex adecdote" onClick={() => GoTONextAnecdote()}></input>
      </div>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVoted]}</p>
    </>

  )
}

export default App