import React from "react";
import { BrowserRouter as Router,  Link } from "react-router-dom";
import { addQuiz } from "../quizSlice";
import { useDispatch , useSelector} from "react-redux";


const QuestionsList = ({items}) => {

    const tester = useSelector((state) => state.question)
    console.log("this is a " + tester);

    const SingleItem = items.map((item, index) => {

        const title = item.title;

        return( 
        <Link to={`/edit/${item.id}`}>
        <h3 style={{textAlign: 'left' , marginLeft: '5%'}}>{title}</h3>
        </Link>
        )

    });

    return(
        <div style={{width: '100%'}}>
        {SingleItem}

        <Link to={`/createQuiz`}>
        <button className="btn-1">Add New Quiz</button>
        </Link>

        
        </div>
    )
    


}

export default QuestionsList;