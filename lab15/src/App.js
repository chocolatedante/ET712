import './App.css';
import {useState} from 'react'

function App() {
  // set up an initial counter for the slice
  //let counter= 1
  //set up state
  const[counter, setCounter]=useState(1)
  // list of three messages
  const messages= ["Stop", "Drop", "Roll"]
  const [isopen, setIsopen] = useState(false)

  // function to open a 'read more' paragraph 
  const readmore = function(){
    setIsopen(!isopen)
  }
  return (
    <>
      <h1 className="title">Slice App by Dante Vanderpool</h1>
      <section className="slicewrapper">
        <div className="numberWrapper">
          <div className={counter==1? "active":""}><p>1</p></div>
          <div className={counter==2? "active":""}><p>2</p></div>
          <div className={counter==3? "active":""} ><p>3</p></div>
        </div>
        <p className="msg"><em>{messages[counter-1]}</em></p>
        <div className="btngroup">
          <button onClick={function(){if(counter>1){setCounter(counter-1)}}}>Previous</button>
          <button onClick={function(){if(counter<messages.length)setCounter(counter+1)}}>Next</button>
        </div>

      </section>
      <h1 className='title'>Open and close button</h1>
      <div className='info'>
        <p><b>Cat (Felis catus), Commonly referred to as the domestic or house cat</b></p>
        <button className='readmore_btn' onClick={readmore}>{isopen?"Hide":"Read More"}</button>
      </div>
      <section>
        {
          (isopen) &&
        <p>Cats are great! Get one.</p>
        }
      </section>
    </>
  );
}

export default App;
