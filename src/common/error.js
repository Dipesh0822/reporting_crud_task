async function errorhandler(req, res, next) {
    let err = {
        status: false,
        message: "Not Found."
    };
    next(res.status(404).json(err));
}

module.exports = { errorhandler };