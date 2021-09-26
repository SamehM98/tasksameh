import React , { useState}from "react";
import Select from 'react-select'
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import {addQuiz} from '../quizSlice'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AddQuestions = () => {

  const location = useLocation();
  const dispatch = useDispatch();
  const quiz_id = (useSelector((state) => state.question.value.length))+1
  

    //options for the dropbox
    const[options , setOptions] = useState([
        { value: '1', label: '1' },
        { value: '2', label: '2' }
      ])

     //the selected option for the correct naswer
     const [selected, setSelected] = useState(options[0]); 

      //the questions query input
      const[query, setQuery] = useState('');

      //Question ID 
      const[questionId, setQuestionId] = useState(1);

      //answers query input
      const [answers, setAnswers] = useState([
        { id: 1, text: "" },
        { id: 2, text: "" }
      ])
      //the next ID for answers when adding more answers
      const[id, setId] = useState(3);

      //questionsList
      const[list,setList] = useState([]);

      
      

      //adding a new answer
      const changeState =  () =>{
        setOptions((prev) => [...prev, { value: (options.length + 1).toString(),label:(options.length + 1).toString()}]);
        setAnswers((prev) => [...prev,  { id: id, text: ""}]);
        setId(id+1);

      }

      //adding new question to the array and reseting inputs
      const Reset = () =>{

        setList([...list, {
          "id": questionId,
          "answer_id": null,
          "answers": answers.map(answer => {

            if(answer.id == selected.value)
            answer["is_true"] = "true";
            else
            answer["is_true"] = "false";

            return answer;

          }),
          "text": query,
          "feedback_true": `question ${questionId} correct`,
          "feedback_false": `question ${questionId} wrong`
        }])

        console.log(list);




        setOptions([
          { value: '1', label: '1' },
          { value: '2', label: '2' }
        ])

        setSelected(options[0]); 

        setQuery('')

        setQuestionId(questionId + 1)

        setAnswers([
          { id: 1, text: "" },
          { id: 2, text: "" }
        ])

        setId(3)
      }

      //eventListener
      const onTermChange = (event) => {

        if(event.target.id == "question") //question query
        {
          setQuery(event.target.value);
        }
        else //answer query
        {
        const values = [...answers]
        values[event.target.id - 1]["text"] = event.target.value
        setAnswers(values)
       // console.log(values);
      }
        
      }

      //Redux. Push to global state array

      const AddNew = () =>{
        dispatch(addQuiz({

          "title" : location.state.title,
          "description": location.state.description,
          "url" : location.state.url,
          "final_score": location.state.final_score,
          "questions_answers" : list,
          "id" : quiz_id,
          "created": (new Date().toLocaleString()),
          "modified": (new Date().toLocaleString())
        }))

      }


    return (

        

        <div className="questionsWrapper">
        <div style={{width: '25%' , textAlign: 'center', margin: '20px auto'}} >
            <label>Correct Answer Number </label>
            <Select options={options} onChange={setSelected} value={selected}/>
        </div>

        <h2>Questions</h2>

        <label>Question</label>
        <br/>
        <input type="text" 
        id="question" style={{display: 'block' , minWidth: '400px'}} 
        onChange={onTermChange}
        value={query}/>
        <br/>
        <label>Answers</label>
        
        <form>
                <div>
                    
                    {answers.map((input,index) => 
                    
                    <input type="text" id={input.id} 
                    key={index.toString()} 
                    value={input.text}
                    style={{display: 'block' , marginTop: '20px', minWidth: '400px'}}
                    onChange={onTermChange}/>)
                    
                    }
                </div>
        </form>
        
        <div className="buttonWrapper">
        <button onClick={changeState} className='btn-2'  style={{backgroundColor: 'blue'}}>+ Add more answers</button>
        <button onClick={Reset} className='btn-2'  style={{backgroundColor: 'blue'}}>+ Add Question</button>

        <Link to = "/">
        <button onClick={AddNew} className='btn-2' style={{backgroundColor : 'green'}}>Submit</button>
        </Link>
        </div>


        </div>


        
    )

}

export default AddQuestions;