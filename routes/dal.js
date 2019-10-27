function readOne(id, callback) {

}

function readAll(callback) {

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