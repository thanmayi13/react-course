import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);

  const handleUpClick = () => {
    console.log("UpperCase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoClick = () => {
    console.log("LowerCase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearText = () => {
    console.log("Clear Text was clicked: " + text);
    let newText = '';
    setText(newText);
  }

  const handleBold = () => {
    setIsBold(!isBold);
  }

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  }

  const handleCopy=()=>{
    console.log("I am a copy");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);

    }
  const  handleExtraSpaces=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-dark mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-dark mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-dark mx-1" onClick={handleClearText}>Clear Text</button>
        <button className={`btn btn-dark mx-1 ${isBold ? 'active' : ''}`}   onClick={handleBold}>Bold</button>
        <button className="btn btn-dark mx-1" onClick={handleCopy}>CopyText</button>
        <button className="btn btn-dark mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Time taken to read the text: {0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p style={{ fontWeight: isBold ? 'bold' : 'normal', color: props.mode === 'dark' ? 'white' : 'black' }}>{text.length>0?text:"Enter something in the text box to preview it here"}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired
};
