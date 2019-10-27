const dal = require('./dal');

function getRunner(id) {
    dal.getRunner(id, function (runnderData) {

    })
}

function getRunners() {

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


