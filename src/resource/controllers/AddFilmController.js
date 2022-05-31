const Film = require('../models/FilmModel');
const mongooseHelper = require('../toolConfig/mongooseToObject')

class AddFilmController{

    //[GET] /addFilm
    addFilm(req, res, next) {
        res.render('AddFilm')
    }

    //[POST] /storeFilm
    storeFilm(req, res, next) {
        Film.create({
            name: req.body.name,
            img: req.body.img,
            videoId: req.body.videoId
          }, () => {
            res.redirect('/')
        });
    }
};

module.exports = new AddFilmController;