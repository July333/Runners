var express = require('express');
var router = express.Router();
const runnerBusinessLogic = require('./runner-bl');

/* GET runners. */
router.get('/list', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    runnerBusinessLogic.getRunner(function (err, data) {
        console.log('list',data);
        res.render('runner', {runners: data});
    });
});

/* GET one runner. */
router.get('/onefromlist', function (req, res, next) {
    //res.render('index', { title: 'Express' });
    runnerBusinessLogic.getRunners(function (err, data) {
        console.log('list',data);
        res.render('runner', {runners: data});
    });
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
