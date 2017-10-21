import { withRouter } from 'react-router-dom';

const EVT_SRC_URL = 'https://jullunch-backend.athega.se/stream';

export default withRouter(({ history, language, qid }) => {
    const eventSource = new EventSource(EVT_SRC_URL);

    eventSource.addEventListener(`jullunch.respondent.${qid}`, (evt) => {
        const respondent = JSON.parse(evt.data);
        history.push(`/${language}/question/${qid}/${respondent.rfid}`);
    }, false);

    eventSource.onerror = () => { window.alert('Event source failed!'); };

    return null;
});
