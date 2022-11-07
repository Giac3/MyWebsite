import NavBar from './NavBar';
import './App.css';
import TypeWriterEffect from 'react-typewriter-effect'



function App() {

  return (
    <div className='flex'>
      <NavBar/>
      <div className="flex fixed items-center justify-center w-screen bg-black shadow-black h-20 border-b-2 border-blue-300">
      <TypeWriterEffect 
            textStyle={{ fontFamily: 'Menlo' , color: 'white'}}
            startDelay={100}
            cursorColor="white"
            text='Welcome To My Website'
            typeSpeed={100}
          />
</div>

    </div>
  );
}

export default App;
