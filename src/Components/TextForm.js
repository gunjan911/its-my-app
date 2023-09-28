
import React,{useState} from 'react'

export default function TextForm(props) {
  const handleupClick = ()=>{
   // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase","success");
  }
  const handleOnchange = (event)=>{
    //console.log("Onchange");
    setText(event.target.value)
  }
  const [text, setText] = useState("");
  return (
    <>
    
    <div className='container' style={{color:props.mode === 'dark'?'white':'#101b44'}}>
   <h1>{props.heading}</h1>
   <div className="mb-3">  
<label htmlFor="myBox" className="form-label">Example textarea</label>
<textarea className="form-control" value={text}  onChange={handleOnchange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',
color:props.mode === 'dark'?'white':'black'}}  id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={handleupClick} > Convert to Uppercase</button>
   </div>
   <div className='container'style={{color:props.mode === 'dark'?'white':'#101b44'}}>
    <h1>Your text summery</h1>
    <p>{text.split(" ").length}words {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} minutes</p>
    <h2>Preview your Contest</h2>
    <p>{text.length>0?text:"Enter somthing your preview text"}</p>

   </div>
    </>
  )
}
