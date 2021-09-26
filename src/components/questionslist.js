import React from "react";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";


const QuestionsList = () => {

    //import the Global state array using Redux.
    const items = useSelector((state) => state.question.value)
    console.log(items)

    //map the items to show on the screen as a list
    const SingleItem = items.map((item, index) => {

        const title = item.title;

        return( 
        <Link to={{
            pathname: "/edit",
            state:{
              id: item.id
            }}} >
        <h3 style={{textAlign: 'left' , marginLeft: '5%'}} key={item.id.toString()}>{title}</h3>
        </Link>
        )

    });

    //rendering
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