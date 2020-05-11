function printNames(){

    console.log(`-----Print Names--------`);

    d3.selectAll("#text").nodes().forEach(function(d, i){
        console.log(`${d.id} ::::: ${d.name} ::: ${d.value}`)
    });

}


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

    tbody.selectAll('tr').remove();

    //var tbody = d3.select("tbody");

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



function init(){
    createTable(data);
    results = data;
}


function reloadTable(){
    //get the data filtered
    console.log (`${this.name}  : ${this.value} `)
    d3.select("#message").text(``);
    var filterValue = this.value;
    var sname = this.name;
    results = results.filter(function filterData(i) {

        switch(sname){
                case "datetime":
                  console.log(`${filterValue} compared to ${i.datetime}`);
                  filtered = (filterValue === i.datetime);
                  break;
                case "city":
                  filterValue = filterValue.toLowerCase();
                  console.log(`${filterValue} compared to ${i.city}`);
                  filtered = (filterValue === i.city)
                  break;
                case "state":
                    filterValue = filterValue.toLowerCase();
                    console.log(`${filterValue} compared to ${i.state}`);
                    filtered = (filterValue === i.state)
                    break;
                case "country":
                    filterValue = filterValue.toLowerCase();
                    console.log(`${filterValue} compared to ${i.country}`);
                    filtered = (filterValue === i.country)
                    break;
                default:
                    //should never reach here
                    console.log(`${sname}: ${filterValue}`);
        }
        
        return (filtered);
    });

    createTable(results);

    if(results.length == 0){
        console.log("No Results");
        d3.select("#message").text(`No Results were found matching the ${sname} ${filterValue}`);
        results = data;
    }
        
    console.log(results);
}

init();

var labels = d3.selectAll("#text").on("change", reloadTable);
var button = d3.select("#filter-btn").on("click", function(){d3.selectAll("#text").on("change", reloadTable)});

var loadAllButton = d3.select("#loadall-btn");
loadAllButton.on("click", function(){
    var tbody = d3.select("tbody");

    tbody.selectAll('tr').remove();
    d3.select("#message").text(``);
    init();
    //console.log(data)
});


//var labels = d3.selectAll("#text").on("change", printNames);
//printNames();