// import axios from 'axios'
import React, { useState } from "react";
import Anecdotes from "./components/Anecdotes";
import Course from "./components/Course";
import Form from "./components/Form";
import Part2exercise from "./components/part2exercise";
import DataFetching from "./components/DataFetching";
import Phonebook from "./components/Phonebook";
import Countries from "./components/Countries";

const App = (sum) => {
  return (
    <div>
      <Countries />
      {/* <DataFetching /> */}
    </div>
  );
};

export default App;

// const App = (sum) => {
//   const courses = [
//     {
//       name: 'Half Stack application development',
//       id: 1,
//       parts: [
//         {
//           name: 'Fundamentals of React',
//           exercises: 10,
//           id: 1
//         },
//         {
//           name: 'Using props to pass data',
//           exercises: 7,
//           id: 2
//         },
//         {
//           name: 'State of a component',
//           exercises: 14,
//           id: 3
//         },
//         {
//           name: 'Redux',
//           exercises: 11,
//           id: 4
//         }
//       ]
//     },
//     {
//       name: 'Node.js',
//       id: 2,
//       parts: [
//         {
//           name: 'Routing',
//           exercises: 3,
//           id: 1
//         },
//         {
//           name: 'Middlewares',
//           exercises: 7,
//           id: 2
//         }
//       ]
//     }
//   ]

//   let {id, name, parts} = courses[0]
//   let {id:id1,name:name1, parts:parts1} = courses[1]
//   console.log(id1)
//   // console.log(id1)
//    let each = parts.map(part => part.exercises)
//    let each1 = parts1.map(part => part.exercises)
//    console.log(each)
//    let sumEach = each.reduce((p, c) => p + c)
//   let sumEach1 = each1.reduce((p, c) => p + c)
//   return <div>
//         <Course parts={parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)} name = {name} sum={sumEach} />
//         <Course parts1={parts1.map(part => <li key={part.id}>{name1} {part.exercises}</li>)} name = {name1} sum={sumEach1} />
//   </div>
// }

// export default App

// export default function App() {
//   //state
//   // const [good, setGood] = React.useState(0)
//   // const [bad, setBad] = React.useState(0)
//   // const [neutral, setNeutral] = React.useState(0)

//   // state declaration
//   const [counter, setCounter] = React.useState({
//     good: 0,
//     bad: 0,
//     neutral: 0,
//   })

// // Event handlers
//   function addGood(){
//     setCounter(prevCounter => { return ({...prevCounter, good: prevCounter.good + 1})})}

//   function addNeutral(){
//     setCounter(prevCounter => { return ({...prevCounter, neutral: prevCounter.neutral + 1})})}

//   function addBad(){
//     setCounter(prevCounter => { return ({...prevCounter, bad: prevCounter.bad + 1})})}

//   // function addToCountepropsl(neutral + 1)
//   // }
//   // components
//   let Header =({text})=>{
//       return
//   <h1>{text}</h1>
// }

//   let Buttons = () => (<div>
//     <button onClick = {addGood}>good</button>
//     <button onClick={addNeutral}>neutral</button>
//     <button onClick={addBad} >bad</button>
//   </div>)
//   // let Buttons = (props) => (<div>
//   //   <button onClick = {addGood}>good</button>
//   //   <button onClick= {addNeutral}>neutral</button>
//   //   <button onClick= {addBad}>bad</button>
//   // </div>)

//   let Content = (props)=> <h1>statistics </h1>

// // Refactor statistics
// const StatisticLine = ({text, value}) => <p>{text} {value} </p>

//   let sumCounter = counter.good + counter.bad + counter.neutral
//   let Statistics = (props)=> {

// // Table Work
// const StatisticsTable = () => {
//   return (
//     <table style={{width: "10%"}}>
//       <tbody>
//       <tr>
//         <td>good</td>
//         <td>{counter.good}</td>
//       </tr>
//         <tr>
//         <td>neutral</td>
//         <td>{counter.neutral}</td>
//       </tr>
//         <tr>
//         <td>bad</td>
//         <td>{counter.bad}</td>
//       </tr>
//         <tr>
//         <td>all</td>
//         <td>{sumCounter}</td>
//       </tr>
//         <tr>
//         <td>average</td
//         <td>{((counter.good - counter.bad )/sumCounter).toFixed(1)}</td>
//       </tr>
//         <tr>
//         <td>positive</td>
//         <td>{((counter.good/sumCounter)*100).toFixed(1)}</td>
//       </tr>
//       </tbody>
//     </table>
//   )
// }

//     if(counter.good === 0 && counter.neutral === 0 && counter.bad === 0)
//     {return <h3>No feedback given</h3>}
// else  {return <StatisticsTable />
// }
//  }

//    return <div>
//      <Header text="give feedback"/>
//      <Buttons />
//      <Content />
//      <Statistics />
//    </div>

//   }

// // Former statistics lines
//   // (<div>
//   //   <StatisticLine text ="good" value= {counter.good}/>
//   //   <StatisticLine text ="neutal" value= {counter.neutral}/>
//   //   <StatisticLine text ="bad" value= {counter.bad}/>
//   //   <p>all {sumCounter}</p>
//   //   <p>average {((counter.good - counter.bad )/9).toFixed(12)}</p>
//   //   <p>positive {((counter.good/sumCounter)*100).toFixed(12)} %</p>
//   // </div>)

// // Exercise 1.3-1.5
// // const App = () => {
// //    const course = {name: 'Half Stack application development',
// //       parts :[
// //                   {
// //                     name: 'Fundamentals of React',
// //                     exercises: 10
// //                   },
// //                   {
// //                     name: 'Using props to pass data',
// //                     exercises: 7
// //                   },
// //                   {
// //                     name: 'State of a component',
// //                     exercises: 14
// //                   }
// //               ]}
// // console.log(course.parts[0].key)
// // let Header =()=> <h1>{course.name}</h1>
// // let Content = ()=> <p>Content</p>
// // let Total = ()=> <p>Content</p>
// //    return <div>
// //      <Header />
// //      <Content />
// //      <Total />
// //    </div>

// //    }
// //   export default App
// // let Part = parts.map(part => <p key={part.name}>{part.name} {part.exercises}</p>)

// // let each = parts.map(a => a.exercises)
// // console.log(each)
// // let sumExercise = each.reduce((acc, curr) => acc + curr)
// // let sortExercise = each.reduce((acc, curr) => acc>curr ?acc :curr)
// // console.log(sortExercise)
// // console.log(sumExercise)
// // //components
// // let Header = (props) => <h1>{props.course}</h1>
// // let Content = (props)=> <div>
//   //  {props.part}
//     // {/* prop values
//     // name1 = {parts[0].name} exercises1={parts[0].exercises}
//     //   name2 = {parts[1].name} exercises2={parts[1].exercises}
//     //   name3 = {parts[2].name} exercises3={parts[2].exercises}

//     //     <p>{props.name1} {props.exercises1}</p>
//     //     <p>{props.name2} {props.exercises2}</p>
//     //     <p>{props.name3} {props.exercises3}</p> */}
//         // </div>

// // let Total = (props) => <div>Total number of exercises {props.part}</div>
// //   return (
// //     <div>
// //       <Header course={course}/>
// //       <Content part={Part}/>
// //       <Total part={sumExercise}/>
// //     </div>
// //   )

// // Part 1.1 & 1.2
// // const App = () => {
// //   const course= 'Half Stack application development'
// //   const part1 = 'Fundamentals of React'
// //   const exercises1 = 10
// //   const part2 = 'Using props to pass data'
// //   const exercises2 = 7
// //   const part3 = 'State of a component'
// //   const exercises3 = 14

// //   const total  =  exercises1 + exercises2 + exercises3

// //   const Header = (props)=> {
// //     return <h1>{props.course}</h1>
// //   }
// //   const Content = (props)=>{
// //     return (<div>
// //       <p>{props.part1} {props.exercises1}</p>
// //       <p>{props.part2} {props.exercises2}</p>
// //       <p>{props.part3} {props.exercises3}</p>
// //     </div>)
// //   }
// //
// // const Part1 = (props) => {
// //  return (<div>
// //  {props.part1} {props.exercise1}
// //  </div>)
// // }

// // const Part2 = (props) => {
// //   return (<div>
// //   {props.part2} {props.exercise2}
// //   </div>)
// //  }

// //  const Part3 = () => {
// //   return (<div>
// //   {props.part3} {props.exercise3}
// //   </div>)
// //  }
// //  const Content = () => {
// //    return <div>
// //      <Part1 part1={part1} exercises1={exercises1}/>
// //      <Part2 part2={part2} exercises2={exercises2}/>
// //      <Part3 part3={part3} exercises3={exercises3}/>
// //    </div>
// //  }
// //   const Footer = (props) => {
// // return <small>The number of exercises {props.total}</small>
// //   }

// //   return (<div>
// //     <Header course = {course}/>
// //     <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
// //     <Footer total={total}/>
// //   </div>)
// // }

// // export default App

// // Part 1.3
// //    const course = 'Half Stack application development'
// //     const part1 = {
// //       name: 'Fundamentals of React',
// //       exercises: 10
// //     }
// //     const part2 = {
// //       name: 'Using props to pass data',
// //       exercises: 7
// //     }
// //     const part3 = {
// //       name: 'State of a component',
// //       exercises: 14
// //     }

// //     return (
// //       <div>
// //         <h1>{course}</h1>
// //         <p>{part1.name} {part1.exercises} </p>
// //         <p>{part2.name} {part2.exercises} </p>
// //         <p>{part3.name} {part3.exercises} </p>
// //         <p>The total number of exercise {part1.exercises + part2.exercises + part3.exercises}</p>
// //       </div>)
