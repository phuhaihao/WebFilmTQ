const filmRoute = require('./FilmRoute');
const siteRoute = require('./SiteRoute');
const viewFilmRoute = require('./ViewFilmRoute');

function Router(app){
    app.use('/', siteRoute);
    app.use('/film', filmRoute);
    app.use('/view', viewFilmRoute);
};

module.exports = Router;