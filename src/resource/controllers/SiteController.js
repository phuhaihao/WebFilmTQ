const Film = require('../models/FilmModel');
const mongooseHelper = require('../toolConfig/mongooseToObject')

class SiteController{

    //[GET] /
    index(req, res, next) {
        Film.find({})
        .then(films => { 
            films = films.map(film => film.toObject())
            res.render('HomeView', { films })
        })
        .catch(next)
    }
};

module.exports = new SiteController;