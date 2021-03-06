import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
} from 'react-router-dom';

import './App.css';

import Language from './Language';
import Question from './Question';

import questions from './questions';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <img className="App-logo" src="/athega-quiz/aman.gif" alt="Athegamannen"/>
                    <Language/>
                    <Switch>
                        <Route exact path="/"><Redirect to="athega-quiz"/></Route>
                        <Route exact path="/athega-quiz">
                            <ul>
                                {
                                    Object.keys(questions)
                                        .map((qid, idx) =>
                                            <li key={idx}>
                                                <Link key={qid} to={`/athega-quiz/sv/question/${qid}`} className="App-question">
                                                    {questions[qid].text.sv}
                                                </Link>
                                            </li>)
                                }
                            </ul>
                        </Route>
                        <Route path="/athega-quiz/:language/question/:qid/:respondent?" component={Question}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
