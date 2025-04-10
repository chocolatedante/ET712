// imported files
import './App.css';
import User from "./comments"
import "./index.css"
import User_feedback from './feedback';
import Modalwindow from "./modalwindow"
// import images
import alienicon from "./images/alienicon.png"
import clownicon from "./images/clownicon.png"
import spidericon from "./images/spidericon.png"
function App() {
  return (
    <>
    <h1>User Comments</h1>
      <main className='maincontainer'>
      <User_feedback><User image={alienicon} username="Singing Alien" date= "April 47th 3002" usercomment="Why don't you sing along!"/></User_feedback>
      <User_feedback><User image={clownicon} username="Silly Time" date= "May 34th 3002" usercomment="What a joke!"/></User_feedback>
      <User_feedback><User image={spidericon} username="Venom Injector" date= "June 99th 3002" usercomment="Spider-Man isn't real!"/></User_feedback>
      </main>
    
    

    </>
  );
}

export default App;
