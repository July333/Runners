var express = require('express');
var router = express.Router();
const runnerBusinessLogic = require('./runner-bl');

/* GET runners. */
router.get('/list', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

/* Post runner. */
router.post('/add', function (req, res, next) {
    let isOk = true;
    const runner = req.body;
    /* validation & logic about runner objects */
    if (runner.fname.length < 2) {
        isOk = false;
    }
    /* end validation & logic about runner objects */

    if (isOk) {
        runnerBusinessLogic.createRunner(runner, function (err, data) {
            res.render('index', data);
        });
    } else {
        res.render('error', { title: 'Express' });
    }

});


module.exports = router;
