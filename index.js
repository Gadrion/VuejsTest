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
    var div = "";
    for(const capter of index_json) {
        const mergeurl = mergePagesList(capter.pages);
        div = `<li>
                    <span class='subheading'> 
                        ${capter.subheading} 
                    </span> 
                    <ul> 
                        ${mergeurl} 
                    </ul> 
               </li>`;
        document.querySelector("#root").innerHTML += div;
    }
};

const mergePagesList = (pages) => {
    let mergePages ='';
    for(const page of pages) {
        mergePages += "<li><a href='" + page.url + "/index.html'>" + page.url_title + "</a></li>";
    }
    return mergePages;
}

(() => {
    readTextFile("index.json", initIndex);
})();