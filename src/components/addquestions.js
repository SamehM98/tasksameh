import React , { useState }from "react";
import { Link } from "react-router-dom";
import Select from 'react-select'

const AddQuestions = () => {

    const[options , setOptions] = useState([
        { value: '1', label: '1' },
        { value: '2', label: '2' }
      ])

      const [questions, setQuestions] = useState([1,2])

      const [selected, setSelected] = useState(options[0]);

      const changeState =  () =>{
        setOptions([...options, { value: (options.length + 1).toString(),label:(options.length + 1).toString()}]);
        setQuestions([...questions, { value: (questions.length + 1).toString(),label:(questions.length + 1).toString()}]);
      }

      console.log(selected);

    return (

        

        <div className="questionsWrapper">
        <div style={{width: '25%' , textAlign: 'center', margin: '20px auto'}} >
            <Select options={options} defaultValue={selected} onChange={setSelected}/>
        </div>

        <h2>Questions</h2>
        
        <form>
                <div id="dynamicInput">
                    
                    {questions.map(input => 
                    
                    <input type="text" id={input} key={input} style={{display: 'block' , marginTop: '30px', minWidth: '400px'}}/>)
                    
                    }
                </div>
        </form>

        <button onClick={changeState}>Add</button>
        </div>

        
    )

}

export default AddQuestions;