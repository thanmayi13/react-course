import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [isBold, setIsBold] = useState(false);

  const handleUpClick = () => {
    console.log("UpperCase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }

  const handleLoClick = () => {
    console.log("LowerCase was clicked: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }

  const handleClearText = () => {
    console.log("Clear Text was clicked: " + text);
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared","success");
  }

  const handleBold = () => {
    setIsBold(!isBold);
    if(isBold){
      props.showAlert("Text is not Bold","success");
    }
    else{
      props.showAlert("Text is Bold","success");
    }
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
    props.showAlert("Text Copied","success");
    }
  const  handleExtraSpaces=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed Extra Spaces","success");
    }
    const countWords = (text) =>{
      let words;
      if( text===" " || text.length === 0)
        words = 0;
      else
        words = text.trim().split(/\s+/).length;
      return words;
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
        <button className="btn btn-dark mx-1" onClick={handleExtraSpaces}onChange={countWords}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
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
