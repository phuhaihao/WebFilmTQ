const Film = require('../models/FilmModel');

class SiteController{

    //[GET] /view
    view(req, res) {
        Film.find({}, (err, films) => {
            if(!err){
                res.json(films);
            } else{

            }
        })
    }
};

module.exports = new SiteController;