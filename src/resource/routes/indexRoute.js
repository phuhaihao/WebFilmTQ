const viewFilmRoute = require('./ViewFilmRoute')
const siteRoute = require('./SiteRoute');
const subscribe = require('./SubcribeRoute');
const addFilm = require('./AddFilmRoute')

function Router(app){
    app.use('/', siteRoute);
    app.use('/view', viewFilmRoute)
    app.use('/subscribe', subscribe)
    app.use('/add', addFilm)
};

module.exports = Router;