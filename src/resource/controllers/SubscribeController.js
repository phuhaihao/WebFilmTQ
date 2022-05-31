const Film = require('../models/FilmModel');
const mongooseHelper = require('../toolConfig/mongooseToObject')

class SubscribeController{

    //[GET] /subscribe
    subscribe(req, res, next) {
        Film.findOne({filmLink: req.params.filmLink})
        .then(film => {
            res.render('Subscribe', {film: mongooseHelper.singleMongooseToObject(film)})
        })
        .catch(next)
    }
};

module.exports = new SubscribeController;