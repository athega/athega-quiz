export default {
    notFound: {
        text: {
            sv: 'Vad är det för en fråga?',
            en: 'Say what?',
        },
    },
    one: {
        text: {
            sv: 'Vad kom först, Athega eller Wikipedia?',
            en: 'What came first, Athega or Wikipedia?',
        },
        choices: [
            { id: 'athega', text: { sv: 'Athega', en: 'Athega' } },
            { id: 'wikipedia', text: { sv: 'Wikipedia', en: 'Wikipedia' } },
        ],
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/500px-Wikipedia-logo-v2.svg.png',
    },
    two: {
        text: {
            sv: 'Dafla Power kallades en tidig "Spotifydödare" utvecklad av Athega mer än 10 år innan Spotify lanserades',
            en: 'Dafla Power was the name of an early "Spotify killer" developed by Athega 10 years before the launch of Spotify',
        },
        choices: [
            { id: 'true', text: { sv: 'Sant', en: 'True' } },
            { id: 'false', text: { sv: 'Falskt', en: 'False' } },
        ],
        image: 'http://4.bp.blogspot.com/_PqwpeIkAuRo/SPOzp4CndzI/AAAAAAAAAHc/iE5JSiOCO-s/s400/Dafla+Power+Front+Panel.jpg',
    },
};
