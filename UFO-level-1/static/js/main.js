// for (var i in data) 
// {
//    console.log("row " + i);
//    for (var j in data[i]) 
//      {
//       console.log(" " + data[i][j]);
//      }
// }


// data.forEach((row)=>{
//     console.log(row);
//     // Object.entries(row).forEach(([key, value])=>{
//     //     console.log(`${key} ${value}`)
//     // });
// });


function createTable(tableData) {
    // var table     = document.createElement('table');
    // var tableBody = document.createElement('tbody');

    var table = document.querySelector("table-area");
    var tableBody = document.querySelector("tbody");

    //table.style.border = '2px solid black'
  
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
  
    //   rowData.forEach(function(cellData) {
    //     var cell = document.createElement('td');
    //     cell.appendChild(document.createTextNode(cellData));
    //     row.appendChild(cell);
    //   });

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

// document.getElementById("dateInput").addEventListener("change", function() {
//     var input = this.value;
//     var dateEntered = new Date(input);
//     console.log(input); //e.g. 2015-11-13
//     console.log(dateEntered); //e.g. Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)
// });

function onClick (){
    var results = data.filter(selectDate);
    //clearTable();
    createTable(results)
    console.log(results)
}
