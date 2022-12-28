import React,{useState} from "react";

export default function TextForm(props) {
  const[text,setText]=useState("");

  const handleUpClick=()=>{
    console.log("upper case was click"+text);
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handleLpClick=()=>{
    console.log("lower case was click"+text);
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleASCIIClick=()=>{

    for(let i = 0; i < text.length; i++){
    let newtext=text.charCodeAt(i);
    var newtext1= newtext.toString();
   }
   setText(newtext1);
  }
  const handleClerText=()=>{
    let newtext="";
    setText(newtext);
  }
  const handleExtraspce=()=>{
    let newText = text.split(/[ ]+/);
    setText (newText.join(" "));
  }
  // const handleEmail=()=>{
  //   let newtext=text;
  //   var email1=newtext.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
  //   setText(email1[0]);
  // }
  return (
    <>
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==="dark"?"grey":"white",color:"white"}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLpClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleASCIIClick}>Convert to ASCII</button>
      <button className="btn btn-primary mx-2"onClick={handleClerText}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraspce}>Removextraspace</button>
      </div>
   
    <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}} >
    <h1>Your Text Summary </h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"please enter somthing for preview"}</p>
    </div>
    </>
  );
}
