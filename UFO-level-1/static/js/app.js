function cleanUpValue(key, value){
    if(key === "comments"){
        value = value.replace(/[\&\#443933]/g," ");
        //value = value.replace(/[\&\#33]/g," ");
        //value = value.replace(/[\&\#39]/g," ");
    }

    if(key==='state' || key === 'country'){
        value = value.toUpperCase();
    }

    if(key=='city' || key=='shape'){
        value = value.charAt(0).toUpperCase() + value.slice(1);
    }

    return value;
}

function createTable(tableData) {

    var tbody = d3.select("tbody");

    console.log(tbody);

    tableData.forEach((rows)=>{
        //console.log(rows);
        var row = tbody.append("tr");
        Object.entries(rows).forEach(([key, value])=>{
            //console.log(`${key}: ${value}`)
            value = cleanUpValue(key, value);

            row.append("td").text(value);
        });
    });
}
  
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

function loadAll (){
    createTable(data)
}

var loadAllButton = d3.select("#loadall-btn");
loadAllButton.on("click", function(){
    var tbody = d3.select("tbody");

    tbody.selectAll('tr').remove();

    console.log(`LOAD ALL TBODY ${tbody}`);

    createTable(data);
    //console.log(data)
});

var button = d3.select("#filter-btn");
button.on("click", function (){
    var results = data.filter(selectDate);
    var tbody = d3.select("tbody");

    var rowstodel = tbody.selectAll('tr').remove();

    console.log(`FILTER TBODY ${tbody}`);

    createTable(results)
    //console.log(results)
});