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
                    <img className="App-logo" src="/aman.gif" alt="Athegamannen"/>
                    <Language/>
                    <Switch>
                        <Route exact path="/"><Redirect to="sv"/></Route>
                        <Route exact path="/sv">
                            <ul>
                                {
                                    Object.keys(questions)
                                        .map(qid =>
                                            <li>
                                                <Link key={qid} to={`/sv/question/${qid}`} className="App-question">
                                                    {questions[qid].text.sv}
                                                </Link>
                                            </li>)
                                }
                            </ul>
                        </Route>
                        <Route path="/:language/question/:qid/:respondent?" component={Question}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
