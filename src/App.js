import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  // type usestate
  const [mode, setMode] = useState('light');

  // usestate for alert
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      // msg will receive the message from the showAlert function.
      msg: message,
      type: type
    })

    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }

   // arrow function of togglemode
   const toggleMode = ()=>{
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success')
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success')
    }
  }

  return ( // this start of JSX. if you want to add more than 2 divs use <> at start and </> at the end
  <>
  <Navbar title='logO' aboutText='AbOuT Me' mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />

  {/* does not look nice so use a container of bootstrap */}
  
  <div className="container my-3">
  <TextForm showAlert={showAlert} heading='Enter the text to analyze' mode={mode} />
  </div>
  {/* <About/> */}
  </>    
  );
}

export default App;
