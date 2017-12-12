// var fs = require('fs');
// fs.readFile('./index.html', 'utf8', function(err, data) {
//   // the data is passed to the callback in the second argument
//   console.log(data);
// });

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

const initIndex = (text) => {
    const index_json = JSON.parse(text);
    for(const capter of index_json.capters) {
        console.log(capter);
    }
};

(() => {
    readTextFile("index.json", initIndex);
})();