import React from 'react'

function Content({id, name, parts, sum}) {
  
  return (<div>
    <div>{parts} 
    <li>total of {sum} exercises</li>
    </div>
    
    </div>
  )
}

export default Content