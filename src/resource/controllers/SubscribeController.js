const Film = require('../models/FilmModel');
const mongooseHelper = require('../toolConfig/mongooseToObject')

class SubscribeController{

    //[GET] /subscribe
    subscribe(req, res, next) {
        Film.find({subScriteState: 1})
        .then(films => {
            //mongooseHelper.multiMongooseToObject(films)
            films = films.map(film => film.toObject())
            res.render('Subscribe', {films})
        })
        .catch(next)
    }

    //[GET] /unsubscribe
    unSubscribe(req, res, next){
        Film.updateOne({filmLink: req.query.filmLink}, {subScriteState: 0})
        .then(() => {
            res.redirect('/subscribe')
        })
        .catch()
    }
};

module.exports = new SubscribeController;