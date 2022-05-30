const Film = require('../models/FilmModel');
const mongooseHelper = require('../toolConfig/mongooseToObject')

class SiteController{

    //[GET] /view/:filmLink
    view(req, res, next) {
        Film.findOne({filmLink: req.params.filmLink})
        .then(film => {
            res.render('ViewFilm', {film: mongooseHelper.singleMongooseToObject(film)})
        })
        .catch(next)
    }
};

module.exports = new SiteController;