// Assign the data from `data.js` to a descriptive variable
var ufoSightings = data;

var labels = d3.select("#form").on("submit", runEnter);

d3.select("#filter-btn").on("click", runEnter);


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

function createTable(tableData) {
    var tbody = d3.select("tbody");

    tbody.selectAll('tr').remove();

    //var tbody = d3.select("tbody");

    //console.log(tbody);

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

function runEnter(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    //labels.event.preventDefault();
    d3.event.stopPropagation();

    // Select the input element and get the raw HTML node
    var filter = d3.select("#datetime");

    // Get the value property of the input element
    console.log(filter.nodes()[0].value);
    var inputValue = filter.nodes()[0].value;

    // d3.selectAll("#date").nodes().forEach(function(d, i){
    //     console.log(`${d.id} ::::: ${d.name} ::: ${d.value}`)
    // });

    // Filter the data
    var filteredData = ufoSightings.filter(ufo => ufo.datetime === inputValue);
    
    //print to console for debugging. 
    console.log(filteredData);

    //create the table
    createTable(filteredData);
    if (filteredData.length === 0){
        createTable(ufoSightings);
    }

}

createTable(ufoSightings);



