import React , { useState , useEffect}from "react";
import Select from 'react-select'


const AddQuestions = () => {

  
    //options for the dropbox
    const[options , setOptions] = useState([
        { value: '1', label: '1' },
        { value: '2', label: '2' }
      ])

     //the selected option
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

      //adding new question and reseting
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


    return (

        

        <div className="questionsWrapper">
        <div style={{width: '25%' , textAlign: 'center', margin: '20px auto'}} >
            <span>Correct Answer Number </span>
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
        <button onClick={changeState}>Add more answers</button>
        <button onClick={Reset}>Next Question</button>
        <button onClick={changeState}>Submit</button>
        </div>


        </div>


        
    )

}

export default AddQuestions;