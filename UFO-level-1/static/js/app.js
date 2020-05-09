var filterValue;
var filterName;

var text = d3.selectAll("#text");
var button = d3.select("#filter-btn");

//var text = d3.selectAll("#form-control>name")

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

function filterData(sighting){
    console.log(`${filterName}: ${filterValue} compared to ${sighting.city}`);
    filtered = data;
    switch(filterName) {
        case "datetime":
          // code block
          console.log(`${filterValue} compared to ${sighting.datetime}`);

          filtered = (filterValue === sighting.datetime);
          break;
        case "city":
          // code block
          console.log(`${filterValue} compared to ${sighting.city}`);
          filtered = (filterValue === sighting.city)
          break;
        case "state":
            // code block
            console.log(`${filterValue} compared to ${sighting.state}`);
            filtered = (filterValue === sighting.state)
            break;
        case "country":
            // code block
            console.log(`${filterValue} compared to ${sighting.country}`);
            filtered = (filterValue === sighting.country)
            break;
        default:
            //should never reach here
            console.log(`${filterName}: ${filterValue} compared to ${sighting.filterName}`);
          // code block
      }
      return(filtered);
}

function printTable(results){
    Object.entries(results).forEach(([key, value])=>{
        console.log(value);
    });
}

var loadAllButton = d3.select("#loadall-btn");
loadAllButton.on("click", function(){
    var tbody = d3.select("tbody");

    tbody.selectAll('tr').remove();

    createTable(data);
    //console.log(data)
});


button.on("click", function (){
    var results = data.filter(filterData);

    var tbody = d3.select("tbody");
    tbody.selectAll('tr').remove();

    createTable(results)
    //console.log(results)
});

function handleChange(event){
    filterValue = d3.event.target.value;
    filterName = d3.event.target.name;
    
    console.log(`Handle Change Value: ${filterValue}`);
    console.log(`Handle Change Value: ${filterName}`)

    // console.log(this.name);
    // console.log(this.value)

    var results = data.filter(filterData)

    var tbody = d3.select("tbody");
    tbody.selectAll('tr').remove();

    createTable(results)
    //console.log(results)

}

text.on("change", handleChange);
