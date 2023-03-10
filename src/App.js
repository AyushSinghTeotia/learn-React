import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
 const [mode, setmode] = useState('light');
 const [modename, setmodename] = useState("Enable dark mode");
 const [alert,setAlert]=useState(null);

 const showalert=(massage,type)=>{
  setAlert({
    msg:massage,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
 }

 const togggleMode=()=>{
       if(mode==="light"){
        setmode('dark');
        setmodename("Disable dark mode");
        document.body.style.backgroundColor="grey";
        showalert("dark mode has been enabled","success");
       }
       
       else{
        setmode("light")
        setmodename("Enable dark mode");
        document.body.style.backgroundColor="white";
        showalert("light mode has been enabled","success");
       }
 }

  return (
    <>  
    <Navbar title="TextUtils2" mode={mode} toggleMode={togggleMode} modename={modename} AboutText="About Us"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <TextForm heading="Enter a Text" mode={mode} showalert={showalert}/>
    </div>
    {/* <div className="container my-10">
    <About/>
    </div> */}
   
    
  
    </>
  );
}


export default App;
