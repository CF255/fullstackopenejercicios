import React from 'react';
import ReactDOM from 'react-dom';
/* import './index.css';
import App from './App'; */
/* import reportWebVitals from './reportWebVitals'; */

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */
/* 
reportWebVitals();
 */
/* const App = () =>{

  console.log('hello from component')
  return(

<div>
  <p>HOLA MIJIN</p>
</div>
  )
  }

 */


/*   const App = () =>{

    const now = new Date()
    const a = 10
    const b = 20

    return(
      <div>
        <p>hola mundo esto is {now.toString()}</p>
        <p>
          {a} mas {b} es {a + b}
        </p>
      </div>
    )

  }
 */
/* 
  const App = () =>{

    const now = new Date()
    const a = 10
    const b = 20

    return React.createElement(
      'div',
      null,
      React.createElement(
        'p', null, 'hola mundo esto es ', now.toString()
      ),
      React.createElement(
        'p', null, a, ' mas ', b, ' es ', a + b
      )
     
    )

  }


  
ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
) */

/* const Hello = (props) =>{
  return (
    <div>
      <p> hola {props.name}</p>
    </div>
  )
}

const App = () =>{
  return (
    <div>
      <h1>greetings</h1>
      <Hello name="andrews" />
      <Hello name ="daisy" />
    </div>
  )
} */

/* const Hello = (props) =>{
  return (
    <div>
      <p> hola {props.name}, tu edad es de  {props.age} anos</p>
    </div>
  )
} */

/* const App = () =>{
  const name = 'andrews'
  const age = 22

  return (
    <div>
      <h1>greetings</h1>
      <Hello name="andrews" age= {26 + 10} />
      <Hello name ="daisy"  age = {age}/>
    </div>
  )
} */

/* 
const Footer = () =>{
  return(
    <div>
      greeting app creado por <a href='https://github.com/CF255'></a>
    </div>
  )
}

const App = () => {
  const name = 'maya'
  const age = 10

  return (
    <>
      <h1>greetings</h1>
      <Hello name = "andrews" age={11 + 11} />
      <Hello name = {name} age={age}/>
      <Footer/>
    </>
  )
}
 */

/* const App = () =>{
  const course = "desarrollo de aplicaciones"
  const part1  = "fundamentos de React"
  const exercises1 = 16
  const part2 = "usando props para pasar datos"
  const exercises2 = 10
  const part3  = "estado de un componente"
  const exercises3 = 5

  return(
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>numero de ejercicios {exercises1 + exercises2 + exercises3} </p>
    </div>
  )
} */

/* ejercicio 1.1 - 1.2 */

/* 
const Header = (props) =>{
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
}
 */

/* fin */



/* ejercicio 1.3 - 1.4 */

const Header = (props) =>{
  console.log(props)
  return <h1>{props.course}</h1>
}

/* const App = () =>{
  const course = "desarrollo de aplicacion"
  const parte1 = {
    name: 'fundamentos de reac',
    exercises: 7
  }
  const parte2 = {
    name: 'usando props para pasar datos',
    exercises:46
  }
  const parte3 = {
    name: 'estado del componente',
    exercises: 55
  }
  return(
    <div>

    </div>
  )
} */

const App = () =>{
  const course = "desarrollo de aplicacion"
  const partes = [
    {
    name: 'fundamentos de reac',
    exercises: 7
  },{
    name: 'usando props para pasar datos',
    exercises:46
  },
 {
    name: 'estado del componente',
    exercises: 55
  }
  ]
  return(
    <div>

    </div>
  )
}

/* fin */


ReactDOM.render(<App/>, document.getElementById('root')) 