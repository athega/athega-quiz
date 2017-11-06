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
            { id: 'dafla_true', text: { sv: 'Sant', en: 'True' } },
            { id: 'dafla_false', text: { sv: 'Falskt', en: 'False' } },
        ],
        image: 'http://4.bp.blogspot.com/_PqwpeIkAuRo/SPOzp4CndzI/AAAAAAAAAHc/iE5JSiOCO-s/s400/Dafla+Power+Front+Panel.jpg',
    },
    three: {
        text: {
            sv: 'Vem är det här?',
            en: 'Who is this?',
        },
        choices: [
            { id: 'athegamannen', text: { sv: 'Athegamannen', en: 'The Athega Man' } },
            { id: 'johnny_bravo', text: { sv: 'Johnny Bravo', en: 'Johnny Bravo' } },
        ],
        image: 'http://fest.athega.se/images/honka3.jpg',
    },
    four: {
        text: {
            sv: 'Athega ❤️ Perl == Sant!',
            en: 'Athega ❤️ Perl == True!',
        },
        choices: [
            { id: 'perl_true', text: { sv: 'Sant', en: 'True' } },
            { id: 'perl_false', text: { sv: 'Falskt', en: 'False' } },
        ],
        image: 'http://animal.memozee.com/ArchOLD-3/1113325168.jpg',
    },
    five: {
        text: {
            sv: 'Athega har mycket duktiga utvecklare inom…',
            en: 'Athega has very talented developers using…',
        },
        choices: [
            { id: 'javascript', text: { sv: 'Javascript', en: 'Javascript' } },
            { id: 'java', text: { sv: 'Java', en: 'Java' } },
            { id: 'go', text: { sv: 'Go', en: 'Go' } },
            { id: 'ruby', text: { sv: 'Ruby', en: 'Ruby' } },
        ],
        image: 'http://pixelpiracy.gameiki.com/uploads/wiki-photos/cf9c68527821b8df50dd4c6c4aa43c78.png',
    },
};
