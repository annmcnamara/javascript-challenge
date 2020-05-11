results = data;

function init(){
    createTable(data);
    results = data;
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

function clearTable(){
    var tbody = d3.select("tbody");
    tbody.selectAll('tr').remove();
}

function clearSearch(){
    d3.selectAll("#text").property("value", "");
    init();
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

    console.log(tableData);
}

createTable(data);

function reloadTable(){

    //console.log(this)
    labels.selectAll("#text").on("change", reloadTable1);
    d3.selectAll("#text").each(function(d){
        cb = d3.select(this.name);
        console.log(cb);

    })

}
function reloadTable1(){
    target = this.value;
    column = this.name;
    d3.select("#message").text(``);

    // console.log (`THIS ${this.name}  : ${this.value}`)
    // console.log (`VAR ${column}  : ${target}`)
    filterData = results.filter(function filterData(i) {
        switch(column){
            case "datetime":
                  console.log(`${target} compared to ${i.datetime}`);
                  filtered = (target === i.datetime);
                  break;
            case "city":
                  target = target.toLowerCase();
                  console.log(`${target} compared to ${i.city}`);
                  filtered = (target === i.city)
                  break;
            case "state":
                    target = target.toLowerCase();
                    console.log(`${target} compared to ${i.state}`);
                    filtered = (target === i.state)
                    break;
            case "country":
                    target = target.toLowerCase();
                    console.log(`${target} compared to ${i.country}`);
                    filtered = (target === i.country)
                    break;
            default:
                    //should never reach here
                    console.log(`${sname}: ${target}`);
        }

        return filtered;
    });

    if(filterData.length === 0){
        console.log("No Results");
        d3.select("#message").text(`No Results were found matching the ${column} to ${target}`);
        clearTable();
    }else{
        results = filterData;
        createTable(results);
        console.log(results);
    }
}

init();

var labels = d3.selectAll("#filters").on("change", reloadTable);
reloadTable();

var button = d3.select("#filter-btn").on("click", reloadTable);
var clearButton = d3.select("#clear-btn").on("click", clearSearch);

var loadAllButton = d3.select("#loadall-btn");

loadAllButton.on("click", function(){
    var tbody = d3.select("tbody");
    tbody.selectAll('tr').remove();
    d3.select("#message").text(``);
    init();
    //console.log(data)
});
  


