import {useState} from 'react'
import React from 'react'

function Anecdotes() {
      
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
    // const points = new Array(7).fill(0)
    // const points = [0,1,2,3,4,5,6]
    // console.log(points)
    // let copy = [...points]
    // console.log(copy)
    const randomIndex = ()=> Math.floor(Math.random()*anecdotes.length)
    // let randomAnecdote = anecdotes[randomIndex]
    const [selected, setSelected] = useState(0)
    // const index = anecdotes.indexOf(selected)
    const [point, setPoint] = useState([0,0,0,0,0,0,0])
   
    const style = {
      borderRadius: '5px', 
      border: "1px solid yellow"
    }
    
    
    function randomAnecdotes(){
      setSelected(randomIndex)
    }
    
    // console.log(point)
    
    function addVotes(){
      const newP = [...point]
      newP[selected] = newP[selected] + 1
      
     setPoint(newP)
      
    }
    
    // console.log(votePoint)
   
  return (
    <div>
      <div>
        {anecdotes[selected]} 
      </div>
      <div>has {point[selected]} votes</div>
      <button onClick = {addVotes}>vote</button>
      <button onClick = {randomAnecdotes} style = {style}>next anecdote</button>
    </div>
  )
}

export default Anecdotes