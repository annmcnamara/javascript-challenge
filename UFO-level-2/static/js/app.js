//give the data a more meaningful name
results = data;

//set up the table 
function init(){
    createTable(results);  //call the create table function
    results = data;        //reset results. 
}

function cleanUpValue(key, value){
    if(key === "comments"){
        value = value.replace(/[\&\#443933]/g," ");
        value = value.replace(/quot\;/g," ");
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

    tableData.forEach((rows)=>{
        //console.log(rows);
        var row = tbody.append("tr");
        Object.entries(rows).forEach(([key, value])=>{
            //console.log(`${key}: ${value}`)
            value = cleanUpValue(key, value);

            row.append("td").text(value);
        });
    });

    //console.log(tableData);
}

filtered = data;
function reloadTable(){
    d3.event.preventDefault();  //
    // FILTER 
    results = results.filter(function filterData(i) {
        //console.log(i);
        var filters = labels.selectAll("#text");

        // console.log(filters.nodes()[0].value);

        var applyFilters = [];  //create and array to hold the filters
        arr = filters.nodes()   //create an array to hold the filter nodes (so can access name and value)
        //map true/false depending on if there is a value to filter. 
        applyFilters = filters.nodes().map(x => {if(x.value!=="") {return x.value;}});
        //console.log(applyFilters)
        //console.log(applyFilters.length);  should be 4 
        // loop through applyFilters and apply the values. 
        for(var j = 0; j < applyFilters.length; j++){
                //if(applyFilters[j]) console.log(arr[j].name + " apply " + applyFilters[j] + " " +  i.datetime);
                if (applyFilters[j] && "datetime" === arr[j].name) { 
                    filterDate = i.datetime === arr[j].value;

                    filtered = filtered.filter( function (d) {
                        filterDate = d.datetime === arr[j].value;
                        //console.log(arr[j].value + " filter to " + d.datetime + " " + filterDate);
                        return(d.datetime === arr[j].value);});
                    //console.log(` ${filterDate} ${i.datetime} ${arr[j].value} `);
                    console.log(filtered);    
                }

                if (applyFilters[j] && "city" === arr[j].name) {
                     filterCity = i.city === arr[j].value;

                     filtered = filtered.filter( function (d) {
                        filterCity = d.city === arr[j].value;
                        //console.log(arr[j].value + " filter to " + d.city + " " + filterCity);
                        return(d.city === arr[j].value.toLowerCase());});
                    //console.log(` ${filterDate} ${i.datetime} ${arr[j].value} `);
                    console.log(filtered);   
                    
                }

                if (applyFilters[j] && "state" === arr[j].name) {
                    filterState = i.state === arr[j].value;
                    //console.log(` ${filterCity} ${i.city} ${arr[j].value} `);
                    filtered = filtered.filter( function (d) {
                        filterState = d.state === arr[j].value;
                        //console.log(arr[j].value + " filter to " + d.state + " " + filterState);
                        return(d.state === arr[j].value.toLowerCase());});
                    //console.log(` ${filterDate} ${i.datetime} ${arr[j].value} `);
                    console.log(filtered);  
                }

                if (applyFilters[j] && "country" === arr[j].name) {
                    filterCountry = i.country === arr[j].value;
                    filtered = filtered.filter( function (d) {
                        filterCountry = d.country === arr[j].value;
                        //console.log(arr[j].value + " filter to " + d.country + " " + filterCountry);
                        return(d.country === arr[j].value.toLowerCase());});
                    //console.log(` ${filterDate} ${i.datetime} ${arr[j].value} `);
                    console.log(filtered);
                }

        } //end for
        //console.log("FILTERED: " + filtered);
        createTable(filtered);  //reload the table with results
        return (filtered);
    });  //end filter
    //reset the data
    filtered = data;
}
//load data and set up table
init();

//set up events
var labels        = d3.selectAll("#filters").on("change", reloadTable);
var button        = d3.select("#filter-btn").on("click", reloadTable);
var clearButton   = d3.select("#clear-btn").on("click", clearSearch);
var loadAllButton = d3.select("#loadall-btn");

loadAllButton.on("click", function(){
    var tbody = d3.select("tbody");
    tbody.selectAll('tr').remove();
    d3.select("#message").text(``);
    init();
    //console.log(data)
});