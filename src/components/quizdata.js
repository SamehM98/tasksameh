import React , { useState }from "react";
import { Link } from "react-router-dom";
import './form1.css'
import { useLocation } from "react-router";
import { useSelector} from "react-redux";
import {updateQuiz} from '../quizSlice'
import { useDispatch } from "react-redux";

const QuizData = () => {

  const data = useSelector((state) => state.question.value)
  var newQuiz = JSON.parse(JSON.stringify(data));
  const location = useLocation();
  const dispatch = useDispatch();

  if(location.state)
  {
    var edit = 1
    var index = data.findIndex((item) => item.id == location.state.id)
    console.log(index);
  }
  else
  {
    edit = 0
  }

  
  const [title, setTitle] = useState(edit ? data[index].title : "")
  const [description, setDescription] = useState(edit ? data[index].description : "")
  const [url, setUrl] = useState(edit ? data[index].url: "")
  const [final, setFinal] = useState(edit ? data[index].final_score: "")


  const UpdateData = () =>{
    
  newQuiz[index].url = url
  newQuiz[index].description = description
  newQuiz[index].title = title
  newQuiz[index].final_score = final

  dispatch(updateQuiz(newQuiz))
    

  }


  const onTermChange = (event) => {
    
    if(event.target.id === "Title")
    {
      setTitle(event.target.value);
      //console.log(event.target.value);
    }
    else if(event.target.id === "Description")
    {
      setDescription(event.target.value);
      //console.log(event.target.value);
    }
    else if(event.target.id == "Final")
    {
      setFinal(event.target.value)
    }
    else
    {
      setUrl(event.target.value);
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

        <div class="inputs">
        <label>Final Score</label><br/>
        <input type="text" id="Final" onChange={onTermChange} value={final}/>
        </div>

        </form>

        {
          edit ? 
          <Link to="/">
          <button className="btn-1" style={{backgroundColor: 'green'}} onClick={UpdateData}> Save Changes </button>
          </Link> : 
          <Link to={
            {
              pathname: "/addquestions",
              state:{
                url: url,
                final_score: final,
                description: description,
                title: title
              }
            }
          } >
          <button className="btn-1" style={{backgroundColor: 'green'}}> Next </button>
          </Link>


        }

        

        </div>
    )
}

export default QuizData;