function createTable(tableData) {
    // var table     = document.createElement('table');
    // var tableBody = document.createElement('tbody');
    var table = document.getElementById("ufo-table")
    //var table       = document.querySelector("table");
    var tableBody = document.querySelector("tbody");

    //table.style.border = '2px solid black'
  
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');

      Object.entries(rowData).forEach(([key, value])=>{
        var cell = document.createElement('td');
        if(key === "datetime"){ console.log(typeof value); }
        if(key === "comments"){
            value = value.replace(/\&\#/g,"");
            value = value.replace(/44/g," ");
            value = value.replace(/33/g," ");
            value = value.replace(/39/g, " ")

        }

        if(key==='state'){
            value = value.toUpperCase();
        }

        if(key==='country'){
            value = value.toUpperCase();
        }

        if(key=='city'){
            value = value.charAt(0).toUpperCase() + value.slice(1);
        }
        // theValue = value.replace('a', 'b');
        cell.appendChild(document.createTextNode(value));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }
  
//createTable(data);
createTable(data);

function selectDate(sighting) {
    var x = document.getElementById("datetime")
    //console.log(`${x.value} compared to ${sighting.datetime}`);
    return(x.value == sighting.datetime)
}

function printTable(results){
    Object.entries(results).forEach(([key, value])=>{
        console.log(value);
    });
}

function onClick (){
    var results = data.filter(selectDate);

    var tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    createTable(results)
    console.log(results)
}

function loadAll (){
    var tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";
    
    createTable(data)
}

