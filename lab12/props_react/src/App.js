import './App.css';
import User from "./comments"
// import images
import alienicon from "./images/alienicon.png"
import clownicon from "./images/clownicon.png"
import spidericon from "./images/spidericon.png"
function App() {
  return (
    <>
    <h1>User Comments</h1>
      <main className='maincontainer'>
      <User image={alienicon} username="Singing Alien" date= "April 47th 3002" usercomment="Why don't you sing along!"/>
      <User image={clownicon} username="Silly Time" date= "May 34th 3002" usercomment="What a joke!"/>
      <User image={spidericon} username="Venom Injector" date= "June 99th 3002" usercomment="Spider-Man isn't real!"/>
      </main>
    </>
  );
}

export default App;
