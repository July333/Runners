const fs = require('fs');

function readOne(id, callback) {
    const fileName = './routes/runner.txt';
    fs.readFile(fileName, (e, data) => {
        if(e)
            {throw e}
        else{
            let parsed = JSON.parse(data.toString());
            if(parsed.length == 0){
                parsed = [];
            }else{
                callback(null, parsed);
            }
        }
    });
}

function readAll(callback) {
    const fileName = './routes/runner.txt';
    fs.readFile(fileName, (e, data) => {
        if(e){throw e}
        else{
            let parsed = JSON.parse(data.toString());
            if(parsed.length == 0){
                parsed = [];
            }else{
                callback(null, parsed);
            }
        }

        //const data = d && d.length > 0 ? JSON.parse(d.toString()) : [];
        
    });
}

function saveOne(m, callback) {
    const fileName = 'runner.txt';
    fs.readFile(fileName, (e, d) => {
        const data = d && d.length > 0 ? JSON.parse(d.toString()) : [];
        data.push(m);
        fs.writeFile(fileName, JSON.stringify(data), (e) => {
            if (e) {
                console.log(e);
                callback('error');
            }
            else {
                callback(null);
            }

        });
    });
}

function updateOne(m, callback) {

}


function deleteOne(m, callback) {

}
module.exports.readAll = readAll;