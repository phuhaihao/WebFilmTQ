const Film = require('../models/FilmModel');
const mongooseHelper = require('../toolConfig/mongooseToObject')

class ViewFilmController{

    //[GET] /view/:filmLink
    view(req, res, next){
        Film.findOne({filmLink: req.params.filmLink})
        .then(film => {
            res.render('ViewFilm', {film: mongooseHelper.singleMongooseToObject(film)})
        })
        .catch(next)
    }
};

module.exports = new ViewFilmController;