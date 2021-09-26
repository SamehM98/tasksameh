import React from "react";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";


const QuestionsList = () => {

    const items = useSelector((state) => state.question.value)
    console.log(items)

    const SingleItem = items.map((item, index) => {

        const title = item.title;

        return( 
        <Link to={{
            pathname: "/edit",
            state:{
              id: item.id
            }

            
          }} >
        <h3 style={{textAlign: 'left' , marginLeft: '5%'}} key={item.id.toString()}>{title}</h3>
        </Link>
        )

    });

    return(
        <div style={{width: '100%'}}>
        {SingleItem}

        <Link to={`/createQuiz`}>
        <button className="btn-1" style={{backgroundColor: 'blue'}}> + Add New Quiz</button>
        </Link>

        
        </div>
    )
    


}

export default QuestionsList;