import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    } 
    const handleOnChange = (event)=>{
        console.log("Onchange clicked");
        setText(event.target.value)
    } 
    const [text, setText] = useState('Enter text here');
  return (
    <div className='container'>
      <form>
        <div className="mb-3">

          <textarea
          type="email"
          className="form-control"
          id="myBox"
          rows = "8"
          value={text}
          onChange={handleOnChange}
          ></textarea>
          </div>
        <button className="btn btn-primary" onClick={handleUpClick} >
          Convert to Uppercase
        </button>
      </form>
    </div>
  )
}
