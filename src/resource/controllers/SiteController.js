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

    //[GET] /addSubscribe
    addSubscribe(req, res, next){
        Film.updateOne({filmLink: req.query.filmLink}, {subScriteState: 1})
        .then(() => {
            res.redirect('/')
        })
        .catch()
    }
};

module.exports = new SiteController;