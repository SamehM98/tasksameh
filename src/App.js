import './App.css';
import QuestionsList from './components/questionslist'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuizData from './components/quizdata';
import AddQuestions from './components/addquestions';


function App() {

  

  return (

    

    <Router>
      <Switch>
        
      <Route exact path='/' component={QuestionsList} />
      <Route exact path='/createQuiz' component={QuizData} />
      <Route exact path='/addquestions' component={AddQuestions} /> 
      <Route exact path='/edit' component={QuizData} /> 


      </Switch>
    </Router>
  );
}

export default App;
