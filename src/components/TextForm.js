import React, {useState} from 'react';



export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log('Upper was clicked');
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case.", 'success');
    }

    const handleLoClick = ()=>{
        // console.log('Upper was clicked');
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case.", 'success');
    }

    const handleClClick = ()=>{
        // console.log('Upper was clicked');
        let newText ='';
        setText(newText);
        props.showAlert("Text Cleared.", 'success');
    }

    const handleOnChange = (event)=>{// use event to see changes in the text area
        // console.log('On change');
        setText(event.target.value);
    }
  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1> 
        <div className="mb-3">
            {/* text is used in value. text will have whats written in enter text here. like a default value. and cant change text value directly. must use setTest as function.*/}
            {/* two {{}} outer is to write js and onneer is one to write objescts in js */}
            <textarea className="form-control" id="myBox" value={text} rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?'white':'#13466e', color:props.mode === 'dark'?'white':'#042743'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Upper</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Lower</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClClick}>Clear</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(' ').filter((element)=>{return element.length !==0 }).length} words, {text.length} character</p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length !==0 }).length} Minutes read.</p>
        <h2>Preview</h2>
        {/* <p>{text}</p> */}
        <p>{text.length>0?text:"Enter some text to preview."}</p>
    </div>
    </> 
  ) 
}
