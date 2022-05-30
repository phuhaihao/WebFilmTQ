const viewFilmRoute = require('./ViewFilmRoute')
const siteRoute = require('./SiteRoute');

function Router(app){
    app.use('/', siteRoute);
    app.use('/view', viewFilmRoute)
};

module.exports = Router;