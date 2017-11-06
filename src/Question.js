/* eslint-disable no-nested-ternary */
import React from 'react';
import { parse } from 'qs';
import { Link, withRouter } from 'react-router-dom';
import fetch from 'isomorphic-fetch';
import questions from './questions';
import Listener from './Listener';
import './Question.css';

const questionFromId = qid => questions[qid] || questions.notFound;

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export default withRouter(({ history, match: { params: { language, qid, respondent } } }) => {
    const question = questionFromId(qid);
    const query = parse(window.location.search.substr(1));

    if (respondent && query.answer) {
        fetch(
            `http://fest.athega.se/register/quiz/${query.answer}/${respondent}`,
            { method: 'PUT', mode: 'cors' },
        )
            .then(() => { console.log('Successfully posted answer', query.answer); })
            .catch((err) => { console.log('Failed to post answer:', err); });

        setTimeout(() => { history.push(`/athega-quiz/${language}/question/${qid}`); }, 3000);
    }

    return (
        <div className="Question-root">
            <div className="Question-question">
                <p className="Question-text">{question.text[language]}</p>
                { question.image && <img src={question.image} alt="Question" className="Question-image"/> }
            </div>
            <div className="Question-respondent">
                { respondent
                    ? (
                        query.answer
                            ? (language === 'en'
                                ? <p className="Question-thanks">Thank you!</p>
                                : <p className="Question-thanks">Tack!</p>
                            )
                            : (
                                <div className="Question-choices">
                                    <ul>
                                        { shuffleArray(question.choices).map(((choice, idx) => (
                                            <li key={idx}>
                                                <Link to={`?answer=${choice.id}`} className="Question-choice">{choice.text[language]}</Link>
                                            </li>
                                        )))}
                                    </ul>
                                </div>
                            )
                    )
                    : (
                        <div className="Question-scan">
                            { language === 'en'
                                ? <p>Scan your card in the reader to answer</p>
                                : <p>Scanna ditt kort i läsaren för att svara</p>
                            }
                        </div>
                    )
                }
            </div>
            <Listener language={language} qid={qid}/>
        </div>
    );
});
