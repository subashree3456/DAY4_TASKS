var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', true);

request.send();
request.onload = function () {
    var data = JSON.parse(request.response);
    console.log(data);

        for (var j=0;j<data.length;j++) {
        console.log(data[j].name + "," +  data[j].region +  "," + data[j].subregion + "and" +  data[j].population);
    } 
    
}