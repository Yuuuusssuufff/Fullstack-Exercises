import React from 'react'


function Part2exercise({notes}) {
  const [state, setState] = React.useState("")
 
  return (
    <div>
        <input type="text" value={state} onChange={(e)=>setState(e.target.value)} placeholder="Type here"></input>
        <button onClick={()=> console.log(state)}>button</button>
    </div>
  )
}

export default Part2exercise