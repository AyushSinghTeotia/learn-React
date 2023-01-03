import React,{useState} from "react";

export default function TextForm(props) {
  const[text,setText]=useState("");

  const handleUpClick=()=>{
    console.log("upper case was click"+text);
    let newtext=text.toUpperCase();
    setText(newtext);
    if(newtext.length>0){
      props.showalert("Converted to upper case","success");
    }
    else{
      props.showalert("Please enter text","warning");
    }
  }
  const handleLpClick=()=>{
    console.log("lower case was click"+text);
    let newtext=text.toLowerCase();
    setText(newtext);
    if(newtext.length>0){
      props.showalert("Converted to lower case","success");
    }
    else{
      props.showalert("Please enter text","warning");
    }
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  const handleASCIIClick=()=>{

    let newtext=text;
    if(newtext.length===1)
    {
          var newtext1 =newtext.charCodeAt(0);
          var newtext2=newtext1.toString();
          setText(newtext2);
          props.showalert("Converted to ascii","success");

    }
    else if(newtext.length>1){
      props.showalert("You can convert only charater to ascii","warning");


    }
    else{
      props.showalert("Please enter text","warning");
    }
  }
  const handleRead=()=>{
    let msg =new SpeechSynthesisUtterance();
    msg.text=text;
    window.speechSynthesis.speak(msg);
  }



  //   for(let i = 0; i < text.length; i++){
  //   //var newtext=text.charCodeAt(i);
  //   var newtext1= newtext.toString();
  //  }
  //  setText(newtext1);
  //  console.log(setText)
  //  if(newtext.length>0){
  //   props.showalert("Converted to ascii","success");
  // }
  
  
  const handleClerText=()=>{
    let newtext=text;
     if(newtext.length>0){
      setText("");
      props.showalert("Text has been clear","success");
    }
    else{
      props.showalert("Please enter text","warning");
    }
    }
  
  const handleExtraspce=()=>{
    let text1=text;
    if(text1.length>0){
      let newText = text.split(/[ ]+/);
      setText (newText.join(" "));
      props.showalert("Extra space has been removed","success");
    }
    else{
      props.showalert("Please enter text","warning");
    }
  }
  // const handleEmail=()=>{
  //   let newtext=text;
  //   var email1=newtext.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
  //   setText(email1[0]);
  // }
  return (
    <>
    <div className="container" style={{color:props.mode === "dark"?"white":"black"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLpClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleASCIIClick}>Convert to ASCII</button>
      <button className="btn btn-primary mx-2"onClick={handleClerText}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraspce}>Removextraspace</button>
      <button className="btn btn-primary mx-2" onClick={handleRead}>Read text</button>
      </div>
   
    <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}} >
    <h1>Your Text Summary </h1>
    <p>{text.split(" ").length-1} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"please enter somthing for preview"}</p>
    </div>
    </>
  );
}
