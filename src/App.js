import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
 const [mode, setmode] = useState('light');
 const [modename, setmodename] = useState("Enable dark mode");

 const togggleMode=()=>{
       if(mode==="light"){
        setmode('dark');
        setmodename("Disable dark mode");
        document.body.style.backgroundColor="grey";
       }
       
       else{
        setmode("light")
        setmodename("Enable dark mode");
        document.body.style.backgroundColor="white";
       }
 }

  return (
    <>
    
    <Navbar title="TextUtils2" mode={mode} toggleMode={togggleMode} modename={modename} AboutText="About Us"/>
    <div className="container my-3">
    <TextForm heading="Enter a Text" mode={mode}/>
    </div>
    {/* <div className="container my-10">
    <About/>
    </div> */}
    
  
    </>
  );
}


export default App;
