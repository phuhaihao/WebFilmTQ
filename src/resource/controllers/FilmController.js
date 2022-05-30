
class FilmController{

    //[GET] /film
    show(req, res) {
        res.send("This is Film Page");
    }
};

module.exports = new FilmController;