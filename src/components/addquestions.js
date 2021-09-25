import React , { useState }from "react";
import Select from 'react-select'

const AddQuestions = () => {

    const[options , setOptions] = useState([
        { value: '1', label: '1' },
        { value: '2', label: '2' }
      ])

      const[id, setId] = useState(3);

      const [questions, setQuestions] = useState([
        { id: 1, field: "" },
        { id: 2, field: "" }
      ])

      const [selected, setSelected] = useState(options[0]);

      const changeState =  () =>{
        setOptions((prev) => [...prev, { value: (options.length + 1).toString(),label:(options.length + 1).toString()}]);
        setQuestions((prev) => [...prev,  { id: id, field: ""}]);
        setId(id+1);

      //  console.log(options.length);
     //   console.log(options);

      }


      const onTermChange = (event) => {

        const values = [...questions]
        values[event.target.id - 1]["field"] = event.target.value
        setQuestions(values)
        console.log(values);
        
      }


    return (

        

        <div className="questionsWrapper">
        <div style={{width: '25%' , textAlign: 'center', margin: '20px auto'}} >
            <span>Correct Answer Number </span>
            <Select options={options} defaultValue={selected} onChange={setSelected}/>
        </div>

        <h2>Questions</h2>

        <label>Question</label>
        <br/>
        <input type="text" id="question" style={{display: 'block' , minWidth: '400px'}}/>
        <br/>
        <label>Answers</label>
        
        <form>
                <div>
                    
                    {questions.map((input,index) => 
                    
                    <input type="text" id={input.id} 
                    key={index.toString()} 
                    style={{display: 'block' , marginTop: '20px', minWidth: '400px'}}
                    onChange={onTermChange}/>)
                    
                    }
                </div>
        </form>
        
        <div className="buttonWrapper">
        <button onClick={changeState}>Add more answers</button>
        <button onClick={changeState}>Next Question</button>
        <button onClick={changeState}>Submit</button>
        </div>

        </div>


        
    )

}

export default AddQuestions;