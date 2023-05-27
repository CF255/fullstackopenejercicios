import React from 'react'
import ReactDOM from 'react-dom'


/* const Header = (props) =>{
  return(
   <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <p> {props.part1} {props.exercises1}</p>
      <p> {props.part2} {props.exercises2}</p>
      <p> {props.part3} {props.exercises3}</p>
      <p> {props.part4} {props.total}</p>

           
    </div>
  )
}



const App = () =>{
  const course = "desarrollo de aplicaciones"
  const part1 = "fundamentos de react"
  const part2 = "usando props para pasar datos"
  const part3 = "estado de un componente"
  const part4 = "total de ejercicios"
  const exercises1 = 16
  const exercises2 = 10
  const exercises3 = 5
  const total = exercises1 + exercises2 + exercises3

  return(
    <div>
      <Header course={course}/>
      <Content part1 = {part1} exercises1 ={exercises1}/>
      <Content part2 = {part2} exercises2 ={exercises2}/>
      <Content part3 = {part3} exercises3 ={exercises3}/>
      <Content part4 = {part4} total ={total}/>
      
    

    
    </div>
  )
} */


const Header = props => <h1>{props.course}</h1>

  const Part = props =>(
    <p>
      {props.part.name} {props.part.exercises}
    </p>

  )

  const Content = props =>(
    <>
<Part part={props.parts[0]} />
<Part part={props.parts[1]} />
<Part part={props.parts[2]} />
</>
  )


const Total = props => {
  <p>
    NUMERO DE EJERCICIO {''}
    {props.parts.reduce((total, part) => part.exercises + total, 0)}
  </p>
}

const App = () =>{

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 56
      },
      {
        name: 'Using props to pass data',
        exercises: 5
      },
      {
        name: 'State of a component',
        exercises: 19
      }
    ]
  }

return (
  <div>
    <Header course={course.name}/>
    <Content parts={course.parts} />
    <Total parts={course.parts}/>
  </div>
  )
}

export default App

 ReactDOM.render(<App />, document.getElementById('root'))
 