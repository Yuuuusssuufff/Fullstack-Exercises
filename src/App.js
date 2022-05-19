import React from 'react'

function App() {
  let Header =()=> <h1>Header</h1>
  let Content = ()=> <p>Content</p>
  let Total = ()=> <p>Content</p>
   return <div>
     <Header />
     <Content />
     <Total />
   </div>
  
}

export default App






// Exercise 1.3-1.5
// const App = () => {
//    const course = {name: 'Half Stack application development',
//       parts :[ 
//                   {
//                     name: 'Fundamentals of React',
//                     exercises: 10
//                   },
//                   {
//                     name: 'Using props to pass data',
//                     exercises: 7
//                   },
//                   {
//                     name: 'State of a component',
//                     exercises: 14
//                   }
//               ]}
// console.log(course.parts[0].key)
// let Header =()=> <h1>{course.name}</h1>
// let Content = ()=> <p>Content</p>
// let Total = ()=> <p>Content</p>
//    return <div>
//      <Header />
//      <Content />
//      <Total />
//    </div>
   
//    }
//   export default App
// let Part = parts.map(part => <p key={part.name}>{part.name} {part.exercises}</p>)

// let each = parts.map(a => a.exercises)
// console.log(each)
// let sumExercise = each.reduce((acc, curr) => acc + curr)
// let sortExercise = each.reduce((acc, curr) => acc>curr ?acc :curr)
// console.log(sortExercise)
// console.log(sumExercise)
// //components
// let Header = (props) => <h1>{props.course}</h1> 
// let Content = (props)=> <div>
  //  {props.part}
    {/* prop values
    name1 = {parts[0].name} exercises1={parts[0].exercises}
      name2 = {parts[1].name} exercises2={parts[1].exercises}
      name3 = {parts[2].name} exercises3={parts[2].exercises}

        <p>{props.name1} {props.exercises1}</p>
        <p>{props.name2} {props.exercises2}</p>
        <p>{props.name3} {props.exercises3}</p> */}
        // </div>

// let Total = (props) => <div>Total number of exercises {props.part}</div>
//   return (
//     <div>
//       <Header course={course}/>
//       <Content part={Part}/>
//       <Total part={sumExercise}/>
//     </div>
//   )





// Part 1.1 & 1.2
// const App = () => {
//   const course= 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14
  
//   const total  =  exercises1 + exercises2 + exercises3 

//   const Header = (props)=> {
//     return <h1>{props.course}</h1>
//   }
//   const Content = (props)=>{
//     return (<div>
//       <p>{props.part1} {props.exercises1}</p>
//       <p>{props.part2} {props.exercises2}</p>
//       <p>{props.part3} {props.exercises3}</p>
//     </div>)
//   }
//   const Footer = (props) => {
// return <small>The number of exercises {props.total}</small>
//   }
  
//   return (<div>
//     <Header course = {course}/>
//     <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
//     <Footer total={total}/>
//   </div>)
// }

// export default App




// Part 1.3
//    const course = 'Half Stack application development'
//     const part1 = {
//       name: 'Fundamentals of React',
//       exercises: 10
//     }
//     const part2 = {
//       name: 'Using props to pass data',
//       exercises: 7
//     }
//     const part3 = {
//       name: 'State of a component',
//       exercises: 14
//     }
  
//     return (
//       <div>
//         <h1>{course}</h1>
//         <p>{part1.name} {part1.exercises} </p>
//         <p>{part2.name} {part2.exercises} </p>
//         <p>{part3.name} {part3.exercises} </p>
//         <p>The total number of exercise {part1.exercises + part2.exercises + part3.exercises}</p>
//       </div>
//     )
//   