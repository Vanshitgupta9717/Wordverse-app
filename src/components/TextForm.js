import React,{useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick= ()=>{
        console.log("Uppercase Was Clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
    }

    const handleloClick= ()=>{
        console.log("Lowercase Was Clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      const handleSPerLineClick =() =>{
        let newText = text.replaceAll('.',"\n");
        setText(newText);
      }
      const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
   }
   const handleReverse = (event) => {
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newText = strArr.join("");
    setText(newText);
  };
    
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    
    const [text, setText] = useState('Enter Text Here');
    
  return (
      <>
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <label for="myBox" class="form-label"></label>
   <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
   </div>
   <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert into Uppercase</button>
   <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert into Lowercase</button>
   <button className="btn btn-primary mx-2" onClick={speak}>Speak</button>
   <button className="btn btn-primary mx-2" onClick={handleSPerLineClick}>Break</button>
   <button className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize</button>
   <button className="btn btn-primary mx-2" onClick={handleReverse}>Reverse</button>

</div>
<div className="container my-3">
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length } Average Reading Time</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>


     </>
  )
}

