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
    var table     = document.createElement('table');
    var tableBody = document.createElement('tbody');

    table.style.border = '2px solid black'
  
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
        // theValue = value.replace('a', 'b');
        cell.appendChild(document.createTextNode(value));
        row.appendChild(cell);
      });
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
  }
  
createTable(data);

function selectDate(sighting) {
    var x = document.getElementById("myDate");
    var searchValue = x.value;
    
    document.getElementById("demo").innerHTML = `Search Date is  ${x.value}`;
    ddmmyyyy = sighting.datetime.split("/");
    day    = ddmmyyyy[0];
    month  = ddmmyyyy[1];
    year   = ddmmyyyy[2];

    if(day < 10){
        day = "0"+day;
    }

    if(month < 10){
        month = "0"+month;
    }

    theDate = year+"-"+month+"-"+day;
    console.log(theDate)
    console.log(searchValue)

    return(theDate == searchValue)

}

var dateSearched = data.filter(selectDate);

console.log(`___________________`)
console.log(dateSearched)