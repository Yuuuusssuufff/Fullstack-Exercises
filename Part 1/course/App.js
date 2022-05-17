const App = () => {
  const course= 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  // const exercises = 'The total number of exercises'
  const total  =  exercises1 + exercises2 + exercises3 

  const Header = (props)=> {
    return <h1>{props.course}</h1>
  }
  const Main = (props)=>{
    return (<div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </div>)
  }
  const Footer = (props) => {
return <small>The number of exercises {props.total}</small>
  }
  
  return (<div>
    <Header course = {course}/>
    <Main part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
    <Footer total={total}/>
  </div>)
}

export default App