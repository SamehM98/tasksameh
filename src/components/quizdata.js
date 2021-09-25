import React , { useState }from "react";
import { Link } from "react-router-dom";
import './form1.css'


const QuizData = () => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [url, setUrl] = useState("")


  const onTermChange = (event) => {
    
    if(event.target.id === "Title")
    {
      setTitle(event.target.value);
      console.log(event.target.value);
    }
    else if(event.target.id === "Description")
    {
      setDescription(event.target.value);
      console.log(event.target.value);
    }
    else
    {
      setUrl(event.target.value);
      console.log(event.target.value);
    }

  }

  
  

    return (
        <div class="wrapper">
        <form>
        
        <div class="inputs">
        <label>Title</label><br/>
        <input type="text" id="Title" onChange={onTermChange} value={title}/><br/>
        </div>

        <div class="inputs">
        <label>Description</label><br/>
        <input type="text" id="Description" onChange={onTermChange} value={description}/>
        </div>

        <div class="inputs">
        <label>Youtube URL</label><br/>
        <input type="text" id="Url" onChange={onTermChange} value={url}/>
        </div>
        </form>

        <Link to="/addquestions">
        <button> Next </button>
        </Link>

        </div>
    )
}

export default QuizData;