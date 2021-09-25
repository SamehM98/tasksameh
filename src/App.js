import './App.css';
import quizzes from './quizzes.json'
import QuestionsList from './components/questionslist'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuizData from './components/quizdata';
import AddQuestions from './components/addquestions';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';


function App() {

  

  return (

    

    <Router>
      <Switch>
        
      <Route exact path='/' render={() => (
            <QuestionsList
              items={quizzes}
        />)}>      
      </Route>  

      <Route exact path='/createQuiz' component={QuizData} />
      <Route exact path='/addquestions' component={AddQuestions} /> 

      </Switch>
    </Router>
  );
}

export default App;
