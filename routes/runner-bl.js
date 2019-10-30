const dal = require('./dal');

function getRunner(id, callback) {
    dal.getRunner(id, function (runnderData) {
        if (err) {
            callback(err);
        } else {
            callback(null, runnersData);
        }
    })
}

function getRunners(callback) {
    dal.readAll(function (err, runnersData) {
        if (err) {
            callback(err);
        } else {
            callback(null, runnersData);
        }
    })
}

function createRunner(runner, callback) {
    runner.createdDate = new Date;
    dal.saveOne(runner, function (err, runnerData) {
        if (err) {
            callback(err);
        } else {
            callback(null, runnerData);
        }
    })
}

function updateRunner(runner) {

}

function deleteRunner(runner) {

}

module.exports.getRunners = getRunners;
