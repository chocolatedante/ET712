import './App.css';
import React, {useState} from "react"

function App() {
  // set the initial state
  const[count, setCount] = useState(0)
  // set the initial state for name. Good for single input data
  //const[name, setName]=useState("")

  //  set state for multiple inputs, destruction useState
  // useState({}) --> set a list of states
  const [inputs, setInputs] = useState({})

  // function to open an aletrt dialog when the form is submitted
  const submitform=function(event){
    event.preventDefault()
    alert(`Welcome to React State, ${inputs.username}. Your lucky number is ${inputs.luckynumber} \nComments = ${textcomment}`)
  }

  // function to handle chnages in all inputs
  const handle_changes = function(event){
    const name= event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]:value})) // spread statement
  }
  // set the state for textarea
  const[textcomment, setTextcomment] = useState("")
  // fucntion to collect the value of the textarea
  const submitted_comments = function(event){
    setTextcomment(event.target.value)
  }

  // set the state for select (multiple choice)
  const[mygender, selectedgender] = useState("other")
  // function to collect the gender
  const collectedgender = function(event){
    selectedgender(event.target.value)
  }

  return(
    <>
      <h1>Lab 14, React State</h1>
      <p>Count = {count}</p>
      <button onClick={()=>setCount(count +1)}>Increment the count</button>
      <button onClick={()=>setCount(0)}>Reset Button</button>
    
      <h1>Form application using state</h1>
      <form onSubmit={submitform}>
        <fieldset>
          <legend>Forms in ReactJS</legend>
          <section>
            <label for="username">Enter your name: </label>
            <input 
              type='text'  
              id='username'
              name='username'
              value = {inputs.username}
              onChange={handle_changes}
            />
          </section>
          
          <section>
            <label for="luckynumber">Enter a lucky number: </label>
            <input 
              type='number'  
              id='luckynumber'
              name='luckynumber'
              value = {inputs.luckynumber}
              onChange={handle_changes}
            />
          </section>
          
          <section>
            <label for ="comments">Any suggestions?</label>
            <textarea
              id='comments'
              value={textcomment}
              onChange={submitted_comments}
            />
          </section>

          <section>
            <select value={mygender} onChange={collectedgender}>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </section>

          {/**submit form */}
          <input type='submit'/>
        </fieldset>
      </form>
      {/**test data in the form inputs */}
      <p>Name ={inputs.username}</p>
      <p>Lucky Number={inputs.luckynumber} </p>
      <p>Comments = {textcomment}</p>
      <p>Gender = {mygender}</p>
    </>
  );
}

export default App;
