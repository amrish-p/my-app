import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
   <Navbar title="Navbar-Title" about="AboutPage"></Navbar>
   {/* <TextForm heading="Text to analyze"></TextForm> */}
   <div className="container my-3">
   <About></About>
   </div>
  
    </>
  );
}

export default App;
